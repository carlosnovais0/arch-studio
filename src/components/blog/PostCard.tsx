import { Link } from "react-router"

import { Figure } from "@/components/shared/Figure"
import type { Post } from "@/data/posts"
import { formatDate } from "@/lib/format"
import { cn } from "@/lib/utils"

interface PostCardProps {
  post: Post
  ratio: string
  sizes: string
  className?: string
  headingLevel?: "h2" | "h3"
}

export function PostMeta({ post, className }: { post: Post; className?: string }) {
  return (
    <p className={cn("eyebrow flex flex-wrap gap-x-3 text-stone-deep", className)}>
      <span className="text-ink">{post.category}</span>
      <span aria-hidden>—</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
    </p>
  )
}

export function PostCard({ post, ratio, sizes, className, headingLevel = "h3" }: PostCardProps) {
  const Heading = headingLevel

  return (
    <article className={cn("group", className)}>
      <Link to={`/blog/${post.slug}`} className="block focus-visible:outline-offset-8">
        <Figure photo={post.cover} ratio={ratio} sizes={sizes} zoom />
        <PostMeta post={post} className="mt-6" />
        <Heading className="display mt-4 text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1.05] text-balance transition-colors duration-500 group-hover:text-stone-deep">
          {post.title}
        </Heading>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-deep">{post.excerpt}</p>
      </Link>
    </article>
  )
}
