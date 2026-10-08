/** Foto do Unsplash referenciada pelo identificador (parte após `photo-` na URL). */
export interface Photo {
  id: string
  alt: string
  /** Tratamento aplicado via CSS quando a foto original não combina com a paleta. */
  tone?: PhotoTone
}

export type PhotoTone = "mono" | "earth" | "none"

const WIDTHS = [480, 800, 1200, 1600, 2200] as const

export function unsplashUrl(id: string, width: number, quality = 72): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`
}

export function unsplashSrcSet(id: string, maxWidth = 2200): string {
  return WIDTHS.filter((w) => w <= maxWidth)
    .map((w) => `${unsplashUrl(id, w)} ${w}w`)
    .join(", ")
}
