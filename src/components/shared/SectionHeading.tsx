import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  number: string
  label: string
  className?: string
  /** Para seções escuras. */
  inverted?: boolean
}

/** Numeração editorial seguida de rótulo e linha fina: "01 — Projetos selecionados". */
export function SectionHeading({ number, label, className, inverted = false }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <span className={cn("eyebrow tabular-nums", inverted ? "text-sand" : "text-ink")}>{number}</span>
      <span className={cn("eyebrow", inverted ? "text-stone" : "text-stone-deep")}>{label}</span>
      <span aria-hidden className={cn("h-px flex-1", inverted ? "bg-paper/20" : "bg-stone/40")} />
    </div>
  )
}
