import { useEffect } from "react"

import { site } from "@/data/site"

/** Define o título da aba e a meta description de cada página. */
export function useDocumentMeta(title: string, description: string): void {
  useEffect(() => {
    document.title = title === site.name ? `${site.name} — Arquitetura e Interiores` : `${title} — ${site.name}`

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])
}
