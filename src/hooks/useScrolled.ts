import { useEffect, useState } from "react"

/** Retorna `true` quando a página foi rolada além de `threshold` pixels. */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(() => typeof window !== "undefined" && window.scrollY > threshold)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [threshold])

  return scrolled
}
