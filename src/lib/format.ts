const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})

/** "2026-08-12" → "12 de agosto de 2026" */
export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00Z`))
}

/** Numeração editorial: 1 → "01" */
export function pad(n: number): string {
  return String(n).padStart(2, "0")
}

export function readingTime(texts: string[]): number {
  const words = texts.join(" ").trim().split(/\s+/).length
  // ~180 palavras por minuto, arredondando para cima
  return Math.max(1, Math.ceil(words / 180))
}
