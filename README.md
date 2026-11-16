# QHM website

Next.js 16 App Router application. Content is stored locally and pages are generated statically where supported by the existing routes. No database, CMS connection, or external publication fetch is required to build or render the site.

## Development

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run typecheck
npm run validate:content
npm run lint
npm run build
```

The content validator checks required record fields, unique IDs and slugs, publication dates, internal data links, local data assets, imported article text and source links, and previous/next lookup behavior. It does not contact the original website.

## Organization

- `src/app`: route composition, metadata, static route parameters, and 404 handling.
- `src/components`: presentation and browser interactions.
- `src/content`: local records and page copy. Existing display order is intentional.
- `src/content/publications`: five complete article bodies, an ordered index, and a source manifest for import verification. Paragraphs, headings, lists, line breaks, and source links are stored as plain structured values. No raw HTML is executed.
- `src/config`: site identity, navigation, and office configuration.
- `src/types`: shared serializable data contracts; safe to import into client components with `import type`.
- `src/server/repositories`: server-only asynchronous record readers. Publication listing readers return summaries, keeping full bodies off the client listing payload.
- `src/lib`: small shared utilities, including previous/next lookup.
- `scripts`: build-time data validation.

Shared static presentation data may be imported by components. Entity collections used by routes are read through repositories. Never import `src/server` into a client component.

## Publications

The five legal and market articles were imported from the article pages linked by <https://qhmlawfirm.com/pages/publications.php>. The Eid announcement is excluded. Article text and links were checked against the downloaded source bodies, excluding site navigation, footers, and newsletter forms. Titles, display dates, excerpts, and categories retain the existing local listing values. Original article URLs are preserved as source references.

Each article has a statically generated detail page at `/insights/[slug]`. The homepage and publication listing link to these local pages. Full bodies render on the server with paragraphs, lists, line breaks, and original source links; unknown slugs return a 404. The data layer performs no runtime article downloads. Feature images use five fixed Unsplash CDN URLs; photographer credits and original photo pages are recorded in `src/content/publications/image-credits.json`. The images appear on the homepage, publication listing, and article detail pages through `next/image`.

`source-manifest.json` records normalized body hashes, block counts, and original source links. When intentionally changing an article later, update its verification record as part of that reviewed content change.

## Future database phase

Keep repository function names and return contracts stable. Replace local-record reads inside `src/server/repositories` with database queries, explicitly preserving ordering and mapping results to the existing serializable types. This phase introduces no database dependency, API routes, authentication, or generic repository framework. Configuration and page copy remain local until there is a concrete reason to migrate them.

## Production

```sh
npm run build
npm start
```

The existing `output: "standalone"` setting is retained. For a minimal standalone deployment, copy `public` and `.next/static` into the corresponding locations beside `.next/standalone/server.js`, then run that generated server. No WordPress environment variables are required.

Consult the installed guides in `node_modules/next/dist/docs/` before changing Next.js conventions or rendering behavior.
