import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Publication, PublicationBlock, PublicationInline } from "@/types/publication";

function InlineContent({ content }: { content: PublicationInline[] }) {
  return content.map(({ text, href }, index) =>
    href ? (
      <a key={index} href={href} className="text-brand underline underline-offset-4">
        {text}
      </a>
    ) : (
      <Fragment key={index}>{text}</Fragment>
    ),
  );
}

function BodyBlock({ block }: { block: PublicationBlock }) {
  if (block.type === "list") {
    const List = block.ordered ? "ol" : "ul";
    return (
      <List className={`space-y-3 pl-6 ${block.ordered ? "list-decimal" : "list-disc"}`}>
        {block.items.map((content, index) => (
          <li key={index}><InlineContent content={content} /></li>
        ))}
      </List>
    );
  }

  if (block.type === "heading") {
    const Heading = `h${block.level}` as "h2" | "h3" | "h4" | "h5" | "h6";
    return (
      <Heading className="pt-4 text-2xl font-semibold leading-snug text-brand">
        <InlineContent content={block.content} />
      </Heading>
    );
  }

  return <p><InlineContent content={block.content} /></p>;
}

export default function InsightDetailPage({ post }: { post: Publication }) {
  return (
    <article className="bg-white">
      <header className="border-b border-brand bg-bg-base px-5 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-medium uppercase text-brand">
            <ArrowLeft size={15} />
            All Insights
          </Link>
          <div className="mt-10 flex flex-wrap gap-4 text-xs uppercase text-brand">
            <span>{post.category}</span>
            <time dateTime={post.publishedAt}>{post.date}</time>
          </div>
          <h1 className="mt-5 text-4xl font-semibold uppercase leading-tight text-brand sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          {post.image && (
            <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-brand/5">
              <Image
                src={post.image}
                alt={post.imageAlt || ""}
                fill
                sizes="(max-width: 960px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </header>

      <div className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-7 whitespace-pre-line text-base leading-8 text-black/70">
          {post.body.map((block, index) => <BodyBlock key={index} block={block} />)}
        </div>
      </div>
    </article>
  );
}
