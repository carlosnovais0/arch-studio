import { ArrowLeft } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Link, useParams } from "react-router"

import { PostBody } from "@/components/blog/PostBody"
import { PostCard } from "@/components/blog/PostCard"
import { Figure } from "@/components/shared/Figure"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { type Post, getPost, getRelatedPosts, postText } from "@/data/posts"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { formatDate, readingTime } from "@/lib/format"
import { DURATION, EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"
import NotFoundPage from "./NotFoundPage"

/** Posts relacionados com alturas desencontradas. */
const relatedOffset = ["", "md:mt-24", "md:mt-12"] as const

export default function BlogPostPage() {
  const { slug = "" } = useParams()
  const post = getPost(slug)

  if (!post) return <NotFoundPage />
  return <BlogPost post={post} />
}

function BlogPost({ post }: { post: Post }) {
  useDocumentMeta(post.title, post.excerpt)
  const reduceMotion = useReducedMotion()
  const related = getRelatedPosts(post)
  const minutes = readingTime(postText(post))

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION.slow, ease: EASE, delay },
  })

  return (
    <>
      <article>
        <header className="frame pt-36 pb-14 md:pt-48 md:pb-20">
          <motion.div {...enter(0)}>
            <Link to="/blog" className="eyebrow inline-flex items-center gap-3 text-stone-deep transition-colors hover:text-ink">
              <ArrowLeft aria-hidden className="size-3.5 stroke-[1.25]" />
              Blog
            </Link>
          </motion.div>

          <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-16">
            <motion.dl
              className="col-span-12 grid grid-cols-2 gap-4 self-end sm:grid-cols-4 md:col-span-3 md:grid-cols-1 md:gap-5 md:pb-3"
              {...enter(0.14)}
            >
              {[
                ["Categoria", post.category],
                ["Data", formatDate(post.date)],
                ["Leitura", `${minutes} min`],
                ["Autoria", post.author],
              ].map(([term, value]) => (
                <div key={term}>
                  <dt className="eyebrow text-stone-deep">{term}</dt>
                  <dd className="mt-1 text-sm">{value}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.h1
              className="display col-span-12 text-[clamp(2.75rem,6.6vw,7rem)] text-balance md:col-span-9 md:row-start-1 md:col-start-4"
              {...enter(0.06)}
            >
              {post.title}
            </motion.h1>
          </div>
        </header>

        <motion.div className="frame" {...enter(0.2)}>
          <Figure
            photo={post.cover}
            ratioClassName="aspect-[4/5] sm:aspect-[3/2] md:aspect-[16/8]"
            sizes="100vw"
            priority
          />
        </motion.div>

        <div className="frame pt-20 pb-[clamp(6rem,14vw,13rem)] md:pt-28">
          <p className="mx-0 mb-16 max-w-[38ch] font-serif text-[clamp(1.5rem,2.4vw,2.125rem)] leading-snug font-light text-ink md:mb-20 md:ml-[16.66%] lg:ml-[25%]">
            {post.excerpt}
          </p>
          <PostBody blocks={post.body} />
        </div>
      </article>

      <aside aria-labelledby="relacionados-titulo" className="section-y border-t border-stone/40 bg-sand/30">
        <div className="frame">
          <SectionHeading number="—" label="Continue lendo" />
          <h2 id="relacionados-titulo" className="display mt-16 text-[clamp(2.5rem,4.5vw,4.5rem)] md:mt-20">
            Leia também
          </h2>
          <div className="mt-16 grid gap-x-6 gap-y-16 md:mt-20 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} className={cn(relatedOffset[index % 3])} delay={index * 0.08}>
                <PostCard post={item} ratio={index === 1 ? "4 / 5" : "4 / 3"} sizes="(min-width: 768px) 33vw, 100vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
