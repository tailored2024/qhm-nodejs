import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { publications } from "../src/content/publications";
import { teamMembers } from "../src/content/team";
import { mandatesData } from "../src/content/mandates";
import { sectorsData } from "../src/content/sectors";
import { homepageContent } from "../src/content/home";
import { aboutData } from "../src/content/about";
import { clientLogos, firmProfile } from "../src/content/businessAssets";
import { findAdjacent } from "../src/lib/records";

const projectRoot = resolve(import.meta.dirname, "..");
const routes = new Set([
  "/", "/about", "/contact", "/expertise", "/team", "/insights",
  ...teamMembers.map(({ id }) => `/team/${id}`),
  ...publications.map(({ slug }) => `/insights/${slug}`),
  ...mandatesData.map(({ slug }) => `/expertise/${slug}`),
  ...sectorsData.map(({ slug }) => `/sectors/${slug}`),
]);

function required(value: unknown, label: string): asserts value is string {
  assert(typeof value === "string" && value.trim(), `${label} must not be empty`);
}

function unique(values: string[], label: string) {
  values.forEach((value) => {
    required(value, label);
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value), `${label}: invalid identifier ${value}`);
  });
  assert.equal(new Set(values).size, values.length, `${label}: duplicate identifier`);
}

function validateReferences(value: unknown, label: string) {
  if (typeof value === "string" && value.startsWith("/assets/")) {
    assert(existsSync(resolve(projectRoot, "public", value.slice(1))), `${label}: missing asset ${value}`);
  } else if (Array.isArray(value)) {
    value.forEach((item, index) => validateReferences(item, `${label}[${index}]`));
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      if ((key === "href" || key === "mapHref") && typeof item === "string") {
        if (item.startsWith("/") && !item.startsWith("/assets/")) {
          assert(routes.has(item), `${label}.${key}: unknown route ${item}`);
        } else if (item !== "#" && !item.startsWith("/assets/")) {
          assert(["https:", "mailto:", "tel:"].includes(new URL(item).protocol), `${label}.${key}: unsafe URL`);
        }
      }
      validateReferences(item, `${label}.${key}`);
    }
  }
}

unique(teamMembers.map(({ id }) => id), "team IDs");
unique(mandatesData.map(({ slug }) => slug), "mandate slugs");
unique(sectorsData.map(({ id }) => id), "sector IDs");
unique(sectorsData.map(({ slug }) => slug), "sector slugs");
unique(publications.map(({ id }) => id), "publication IDs");
unique(publications.map(({ slug }) => slug), "publication slugs");

for (const member of teamMembers) {
  for (const key of ["name", "role", "image"] as const) required(member[key], `team.${member.id}.${key}`);
  assert(member.bio.length > 0, `${member.id}: missing biography`);
  member.bio.forEach((paragraph) => required(paragraph, `${member.id}.bio`));
}
for (const record of [...mandatesData, ...sectorsData]) {
  for (const key of ["title", "intro", "positioning", "metaDescription"] as const) required(record[key], `${record.slug}.${key}`);
  assert(record.mandates.length > 0, `${record.slug}: missing mandates`);
}

const manifest: Array<{ slug: string; sourceUrl: string; textSha256: string; blockCount: number; sourceLinks: string[] }> = JSON.parse(
  readFileSync(resolve(projectRoot, "src/content/publications/source-manifest.json"), "utf8"),
);
assert.equal(publications.length, 5, "Expected the five imported articles");
assert.equal(manifest.length, publications.length, "Source manifest must cover all publications");
for (const post of publications) {
  for (const key of ["title", "date", "excerpt", "category", "sourceUrl"] as const) required(post[key], `${post.slug}.${key}`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(post.publishedAt), `${post.slug}: invalid ISO publication date`);
  assert.equal(new Date(post.publishedAt).toISOString().slice(0, 10), post.publishedAt);
  assert.equal(new Date(`${post.date} UTC`).toISOString().slice(0, 10), post.publishedAt, `${post.slug}: inconsistent display date`);
  assert.equal(new URL(post.sourceUrl).protocol, "https:");
  required(post.image, `${post.slug}: missing feature image`);
  required(post.imageAlt, `${post.slug}: missing image description`);
  assert.equal(new URL(post.image).origin, "https://images.unsplash.com", `${post.slug}: unexpected image host`);
  assert(post.body.length > 0, `${post.slug}: missing full article body`);
  const imported = manifest.find(({ slug }) => slug === post.slug);
  assert(imported, `${post.slug}: missing source record`);
  assert.equal(post.sourceUrl, imported.sourceUrl);
  assert.equal(post.href, `/insights/${post.slug}`, `${post.slug}: invalid detail-page link`);
  assert.equal(post.body.length, imported.blockCount);
  const parts = post.body.flatMap((block) => block.type === "list" ? block.items : [block.content]);
  parts.forEach((content) => required(content.map(({ text }) => text).join(""), `${post.slug}: empty body block`));
  const text = parts.flat().map(({ text }) => text).join("").replace(/\s+/g, " ").trim();
  assert.equal(createHash("sha256").update(text).digest("hex"), imported.textSha256, `${post.slug}: article text changed from verified import`);
  const links = parts.flat().flatMap(({ href }) => href ? [href] : []);
  assert.deepEqual([...new Set(links)].sort(), [...new Set(imported.sourceLinks)].sort(), `${post.slug}: source links changed`);
}

validateReferences({ teamMembers, mandatesData, sectorsData, homepageContent, aboutData, clientLogos, firmProfile, publications }, "content");

// Protect previous/next behavior while moving detail lookups out of routes.
for (const records of [teamMembers, mandatesData, sectorsData] as const) {
  const first = findAdjacent<unknown>([...records], (record) => record === records[0]);
  assert.equal(first?.record, records[0]);
  assert.equal(first?.adjacent.prev, undefined);
  assert.equal(first?.adjacent.next, records[1]);
  const last = findAdjacent<unknown>([...records], (record) => record === records[records.length - 1]);
  assert.equal(last?.adjacent.next, undefined);
  assert.equal(last?.adjacent.prev, records[records.length - 2]);
  assert.equal(findAdjacent<unknown>([...records], () => false), undefined);
}
assert.equal(findAdjacent([], () => true), undefined);
assert.deepEqual(findAdjacent(["only"], () => true), { record: "only", adjacent: { prev: undefined, next: undefined } });

console.log(`Validated ${teamMembers.length} team members, ${mandatesData.length} mandates, ${sectorsData.length} sectors, and ${publications.length} full publications. Assets, routes, source text, links, and adjacency checks passed.`);
