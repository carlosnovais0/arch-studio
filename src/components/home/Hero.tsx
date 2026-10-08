import { motion, useReducedMotion } from "framer-motion"

import { PHOTOS } from "@/data/photos"
import { site } from "@/data/site"
import { unsplashSrcSet, unsplashUrl } from "@/lib/images"
import { EASE } from "@/lib/motion"

const HERO_PHOTO = PHOTOS.whiteSculpture

export function Hero() {
  const reduceMotion = useReducedMotion()
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  })

  return (
    <section aria-labelledby="hero-title" className="relative h-svh min-h-[34rem] overflow-hidden bg-ink text-paper">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <img
          src={unsplashUrl(HERO_PHOTO, 2200, 78)}
          srcSet={unsplashSrcSet(HERO_PHOTO)}
          sizes="100vw"
          alt="Edifício branco de formas angulosas e escultóricas contra o céu"
          fetchPriority="high"
          decoding="async"
          className="tone-mono size-full object-cover object-[60%_center]"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-ink/45" />

      <div className="frame relative flex h-full flex-col justify-end pb-8 md:pb-12">
        <motion.p className="eyebrow mb-6 text-paper/80 md:mb-8" {...enter(0.2)}>
          Arquitetura e interiores — {site.address.city} — desde {site.foundedYear}
        </motion.p>

        <motion.h1
          id="hero-title"
          className="display -ml-[0.04em] text-[clamp(3rem,13.4vw,15.5rem)] leading-[0.8] whitespace-nowrap"
          {...enter(0.32)}
        >
          {site.name}
        </motion.h1>

        <motion.div
          className="mt-8 grid grid-cols-12 items-end gap-x-6 border-t border-paper/25 pt-6 md:mt-12"
          {...enter(0.46)}
        >
          <p className="col-span-10 max-w-md text-base leading-relaxed font-light text-paper/90 md:col-span-5 md:text-lg">
            {site.tagline} Projetos residenciais, comerciais e institucionais desenhados a partir do lugar.
          </p>

          <a
            href="#projetos"
            className="col-span-2 flex flex-col items-end gap-3 justify-self-end md:col-span-2 md:col-start-11"
            aria-label="Rolar até os projetos em destaque"
          >
            <span className="eyebrow hidden text-paper/80 md:block">Role</span>
            <span aria-hidden className="relative block h-14 w-px overflow-hidden bg-paper/20">
              <span className="absolute inset-0 block animate-scroll-line bg-paper" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
