import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useLocation, useOutlet } from "react-router"

import { Toaster } from "@/components/ui/sonner"
import { DURATION, EASE } from "@/lib/motion"
import { Footer } from "./Footer"
import { Header } from "./Header"

/** Ao trocar de rota: volta ao topo e leva o foco ao conteúdo principal (leitores de tela). */
function resetViewport() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  requestAnimationFrame(() => document.getElementById("conteudo")?.focus({ preventScroll: true }))
}

export function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  const reduceMotion = useReducedMotion()

  return (
    <>
      <a
        href="#conteudo"
        className="eyebrow sr-only z-[60] bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <AnimatePresence mode="wait" initial={false} onExitComplete={resetViewport}>
        <motion.main
          key={location.pathname}
          id="conteudo"
          tabIndex={-1}
          className="outline-none"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : DURATION.base, ease: EASE }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>

      <Footer />
      <Toaster />
    </>
  )
}
