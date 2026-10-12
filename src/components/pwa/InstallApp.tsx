import { Download } from "lucide-react"

import { useInstallPrompt } from "@/hooks/useInstallPrompt"

/** Botão "Instalar app" (Android, Chrome, Edge) ou instrução para iPhone/iPad. Some quando já instalado. */
export function InstallApp() {
  const { mode, install } = useInstallPrompt()

  if (mode === "prompt") {
    return (
      <button
        type="button"
        onClick={() => void install()}
        className="eyebrow inline-flex cursor-pointer items-center gap-2 self-start text-paper transition-colors duration-500 hover:text-sand"
      >
        <Download aria-hidden className="size-3.5 stroke-[1.25]" />
        Instalar app
      </button>
    )
  }

  if (mode === "ios") {
    return (
      <p className="max-w-xs text-xs leading-relaxed text-paper/70">
        Para instalar no iPhone, toque em <span className="text-paper">Compartilhar</span> e depois em{" "}
        <span className="text-paper">Adicionar à Tela de Início</span>.
      </p>
    )
  }

  return null
}
