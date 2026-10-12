import { useEffect } from "react"
import { toast } from "sonner"
import { useRegisterSW } from "virtual:pwa-register/react"

/** Registra o service worker e avisa quando há uma nova versão do site pronta para ser ativada. */
export function UpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisterError(error) {
      console.error("[ARCH STUDIO] Falha ao registrar o service worker:", error)
    },
  })

  useEffect(() => {
    if (!needRefresh) return
    toast("Nova versão disponível.", {
      id: "pwa-atualizacao",
      description: "Atualize para ver o conteúdo mais recente.",
      duration: Infinity,
      action: { label: "Atualizar", onClick: () => void updateServiceWorker(true) },
      onDismiss: () => setNeedRefresh(false),
    })
  }, [needRefresh, setNeedRefresh, updateServiceWorker])

  return null
}
