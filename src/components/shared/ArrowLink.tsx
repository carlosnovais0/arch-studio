import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

import { cn } from "@/lib/utils"

interface ArrowLinkProps {
  to: string
  children: ReactNode
  className?: string
}

/** Link textual com sublinhado fino que se expande no hover. */
export function ArrowLink({ to, children, className }: ArrowLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "eyebrow group/link inline-flex items-center gap-3 border-b border-current pb-2 transition-[gap] duration-500 ease-editorial hover:gap-5",
        className
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-3.5 stroke-[1.25]" />
    </Link>
  )
}
