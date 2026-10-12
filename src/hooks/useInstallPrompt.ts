import { useSyncExternalStore } from "react"

/** Evento do Chrome/Edge/Android que permite abrir o diálogo de instalação. Não faz parte do lib.dom. */
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export type InstallMode = "prompt" | "ios" | "none"

const listeners = new Set<() => void>()
let deferredPrompt: BeforeInstallPromptEvent | null = null
let installed = false

const notify = () => listeners.forEach((listener) => listener())

function isStandalone(): boolean {
  const iosStandalone = (navigator as Navigator & { standalone?: boolean }).standalone === true
  return iosStandalone || window.matchMedia("(display-mode: standalone)").matches
}

function isIos(): boolean {
  const ua = navigator.userAgent
  // iPadOS se identifica como Mac; a tela sensível ao toque denuncia o iPad.
  return /iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)
}

// Os ouvintes são registrados ao carregar o módulo, antes da renderização,
// para não perder o evento caso ele dispare cedo.
if (typeof window !== "undefined") {
  installed = isStandalone()
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault()
    deferredPrompt = event as BeforeInstallPromptEvent
    notify()
  })
  window.addEventListener("appinstalled", () => {
    installed = true
    deferredPrompt = null
    notify()
  })
}

function getMode(): InstallMode {
  if (installed) return "none"
  if (deferredPrompt) return "prompt"
  return isIos() ? "ios" : "none"
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

async function install(): Promise<void> {
  if (!deferredPrompt) return
  const promptEvent = deferredPrompt
  await promptEvent.prompt()
  const { outcome } = await promptEvent.userChoice
  // O mesmo evento não pode ser reutilizado; o navegador dispara outro se ainda for possível instalar.
  deferredPrompt = null
  if (outcome === "accepted") installed = true
  notify()
}

/** Indica como o site pode ser instalado neste aparelho e expõe a ação de instalar. */
export function useInstallPrompt(): { mode: InstallMode; install: () => Promise<void> } {
  const mode = useSyncExternalStore(subscribe, getMode, (): InstallMode => "none")
  return { mode, install }
}
