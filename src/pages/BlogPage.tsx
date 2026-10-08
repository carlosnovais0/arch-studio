import { Link } from "react-router"

import { PostCard, PostMeta } from "@/components/blog/PostCard"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { Figure } from "@/components/shared/Figure"
import { PageIntro } from "@/components/shared/PageIntro"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { posts } from "@/data/posts"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { cn } from "@/lib/utils"

/** Duas colunas desencontradas, com proporções alternadas. */
const LIST_LAYOUT = [
  { className: "md:col-span-5 md:col-start-1", ratio: "4 / 3" },
  { className: "md:col-span-5 md:col-start-8 md:mt-40", ratio: "4 / 5" },
] as const

export default function BlogPage() {
  useDocumentMeta(
    "Blog",
    "Ensaios, guias e bastidores do ARCH STUDIO sobre arquitetura, interiores, sustentabilidade e processo de projeto."
  )

  const featured = posts.find((post) => post.featured) ?? posts[0]
  const others = posts.filter((post) => post.slug !== featured.slug)

  return (
    <>
      <PageIntro eyebrow="Blog" title="Notas sobre arquitetura, matéria e cidade." />

      <section aria-labelledby="destaque-titulo" className="frame">
        <article className="group grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 md:col-span-8">
            <Link to={`/blog/${featured.slug}`} tabIndex={-1} aria-hidden>
              <Figure photo={featured.cover} ratio="3 / 2" sizes="(min-width: 768px) 66vw, 100vw" priority zoom />
            </Link>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:self-end" delay={0.1}>
            <p className="eyebrow mb-6 text-ink">Em destaque</p>
            <PostMeta post={featured} />
            <h2 id="destaque-titulo" className="display mt-5 text-[clamp(2.25rem,3.8vw,3.75rem)] leading-[1.02] text-balance">
              <Link to={`/blog/${featured.slug}`} className="transition-colors duration-500 hover:text-stone-deep">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-deep">{featured.excerpt}</p>
            <ArrowLink to={`/blog/${featured.slug}`} className="mt-10">
              Ler artigo
            </ArrowLink>
          </Reveal>
        </article>
      </section>

      <section aria-labelledby="artigos-titulo" className="section-y frame">
        <SectionHeading number="01" label="Todos os artigos" />
        <h2 id="artigos-titulo" className="sr-only">
          Todos os artigos
        </h2>
        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-20 md:mt-24 md:gap-y-12">
          {others.map((post, index) => {
            const layout = LIST_LAYOUT[index % LIST_LAYOUT.length]
            return (
              <Reveal key={post.slug} className={cn("col-span-12", layout.className)}>
                <PostCard post={post} ratio={layout.ratio} sizes="(min-width: 768px) 42vw, 100vw" />
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
