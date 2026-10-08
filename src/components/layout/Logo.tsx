import { Link } from "react-router"

import { cn } from "@/lib/utils"
import { site } from "@/data/site"

interface LogoProps {
  className?: string
  onClick?: () => void
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${site.name} — página inicial`}
      className={cn("font-serif text-[1.375rem] leading-none font-normal tracking-[0.14em]", className)}
    >
      {site.name}
    </Link>
  )
}
