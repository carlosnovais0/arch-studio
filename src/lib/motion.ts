import type { Transition, Variants } from "framer-motion"

/** Curva de desaceleração longa, usada em todo o site. */
export const EASE = [0.22, 1, 0.36, 1] as const

export const DURATION = {
  fast: 0.4,
  base: 0.55,
  slow: 0.7,
} as const

export const revealTransition: Transition = { duration: DURATION.slow, ease: EASE }

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
}
