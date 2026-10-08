import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { DURATION, EASE } from "@/lib/motion"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Deslocamento vertical inicial, em pixels. */
  y?: number
}

/** Fade com leve deslocamento ao entrar na viewport. Desativado com `prefers-reduced-motion`. */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: DURATION.slow, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
