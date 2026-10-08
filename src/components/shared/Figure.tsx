import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { type Photo, unsplashSrcSet, unsplashUrl } from "@/lib/images"

const toneClass = {
  mono: "tone-mono",
  earth: "tone-earth",
  none: "",
} as const

interface FigureProps {
  photo: Photo
  /** Proporção CSS, ex.: "4 / 5". Evita saltos de layout. */
  ratio?: string
  /** Alternativa a `ratio` para proporções responsivas, ex.: "aspect-[4/5] md:aspect-[21/9]". */
  ratioClassName?: string
  /** Atributo `sizes` para o navegador escolher a largura certa do `srcset`. */
  sizes?: string
  /** Imagens da primeira dobra: carregamento imediato e prioridade alta. */
  priority?: boolean
  /** Zoom sutil quando o elemento pai com a classe `group` recebe hover. */
  zoom?: boolean
  caption?: ReactNode
  className?: string
}

export function Figure({
  photo,
  ratio,
  ratioClassName,
  sizes = "100vw",
  priority = false,
  zoom = false,
  caption,
  className,
}: FigureProps) {
  return (
    <figure className={className}>
      <div className={cn("relative overflow-hidden bg-sand/50", ratioClassName)} style={ratio ? { aspectRatio: ratio } : undefined}>
        <img
          src={unsplashUrl(photo.id, 1200)}
          srcSet={unsplashSrcSet(photo.id)}
          sizes={sizes}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className={cn(
            "absolute inset-0 size-full object-cover",
            toneClass[photo.tone ?? "mono"],
            zoom &&
              "transition-transform duration-700 ease-editorial motion-safe:group-hover:scale-[1.04] motion-safe:group-focus-visible:scale-[1.04]"
          )}
        />
      </div>
      {caption ? <figcaption className="mt-4 max-w-xl font-serif text-[1.0625rem] leading-snug text-stone-deep italic">{caption}</figcaption> : null}
    </figure>
  )
}
