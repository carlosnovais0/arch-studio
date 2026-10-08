import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { DURATION, EASE } from "@/lib/motion"

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
}

/** Abertura das páginas internas: rótulo, título serifado grande e texto deslocado à direita. */
export function PageIntro({ eyebrow, title, intro }: PageIntroProps) {
  const reduceMotion = useReducedMotion()
  const initial = reduceMotion ? false : { opacity: 0, y: 32 }

  return (
    <header className="frame pt-40 pb-20 md:pt-52 md:pb-28">
      <div className="grid grid-cols-12 gap-x-6">
        <motion.p
          className="eyebrow col-span-12 mb-10 text-stone-deep md:col-span-3 md:mb-0 md:pt-6"
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="display col-span-12 text-[clamp(3rem,8.5vw,8.5rem)] text-balance md:col-span-9"
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE, delay: 0.08 }}
        >
          {title}
        </motion.h1>
        {intro ? (
          <motion.div
            className="col-span-12 mt-12 max-w-xl text-base leading-relaxed text-stone-deep md:col-span-5 md:col-start-8 md:mt-16"
            initial={initial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE, delay: 0.16 }}
          >
            {intro}
          </motion.div>
        ) : null}
      </div>
    </header>
  )
}
