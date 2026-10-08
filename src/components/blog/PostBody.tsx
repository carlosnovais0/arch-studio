import { Figure } from "@/components/shared/Figure"
import { Reveal } from "@/components/shared/Reveal"
import type { PostBlock } from "@/data/posts"
import { cn } from "@/lib/utils"

/** Coluna de leitura: cerca de 65 caracteres por linha. */
const TEXT_COLUMN = "col-span-12 max-w-[65ch] md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4"

function Block({ block, isFirstParagraph }: { block: PostBlock; isFirstParagraph: boolean }) {
  switch (block.type) {
    case "paragraph":
      return <p className={cn(TEXT_COLUMN, "article-text mt-7", isFirstParagraph && "dropcap mt-0")}>{block.text}</p>
    case "heading":
      return (
        <h2 className={cn(TEXT_COLUMN, "display mt-20 mb-1 text-[clamp(1.875rem,3vw,2.5rem)] leading-[1.1]")}>
          {block.text}
        </h2>
      )
    case "quote":
      return (
        <Reveal className="col-span-12 my-16 md:col-span-9 md:col-start-2 md:my-24">
          <blockquote className="border-l border-ink pl-6 md:pl-12">
            <p className="display text-[clamp(2rem,4vw,3.75rem)] leading-[1.08] text-balance italic">“{block.text}”</p>
            {block.cite ? <footer className="eyebrow mt-6 text-stone-deep">{block.cite}</footer> : null}
          </blockquote>
        </Reveal>
      )
    case "image":
      return (
        <Reveal
          className={cn(
            "col-span-12 my-14 md:my-20",
            block.wide ? "md:col-span-10 md:col-start-2" : "md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4"
          )}
        >
          <Figure
            photo={block.photo}
            ratio={block.wide ? "16 / 9" : "4 / 3"}
            sizes={block.wide ? "(min-width: 768px) 83vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            caption={block.caption}
          />
        </Reveal>
      )
  }
}

export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  const firstParagraph = blocks.findIndex((block) => block.type === "paragraph")

  return (
    <div className="grid grid-cols-12 gap-x-6">
      {blocks.map((block, index) => (
        <Block key={`${block.type}-${index}`} block={block} isFirstParagraph={index === firstParagraph} />
      ))}
    </div>
  )
}
