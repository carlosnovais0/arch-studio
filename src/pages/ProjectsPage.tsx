import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useSearchParams } from "react-router"

import { CategoryFilter, type FilterOption } from "@/components/projects/CategoryFilter"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { PageIntro } from "@/components/shared/PageIntro"
import { Reveal } from "@/components/shared/Reveal"
import { PROJECT_CATEGORIES, projects } from "@/data/projects"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { pad } from "@/lib/format"
import { DURATION, EASE } from "@/lib/motion"
import { cn } from "@/lib/utils"

const ALL = "todos"

const toParam = (category: string) => category.toLowerCase()

/**
 * Padrão do grid: larguras, proporções e deslocamentos diferentes, repetidos a cada seis projetos.
 * Cada item define a coluna inicial para que a composição seja previsível.
 */
const GRID_PATTERN = [
  { className: "md:col-span-7 md:col-start-1", ratio: "4 / 3", sizes: "(min-width: 768px) 58vw, 100vw" },
  { className: "ml-auto w-[84%] md:col-span-4 md:col-start-9 md:mt-48 md:w-auto", ratio: "3 / 4", sizes: "(min-width: 768px) 33vw, 84vw" },
  { className: "md:col-span-5 md:col-start-2", ratio: "1 / 1", sizes: "(min-width: 768px) 42vw, 100vw" },
  { className: "ml-auto w-[84%] md:col-span-5 md:col-start-8 md:mt-36 md:w-auto", ratio: "4 / 5", sizes: "(min-width: 768px) 42vw, 84vw" },
  { className: "md:col-span-8 md:col-start-3", ratio: "16 / 9", sizes: "(min-width: 768px) 66vw, 100vw" },
  { className: "w-[88%] md:col-span-5 md:col-start-7 md:w-auto", ratio: "3 / 2", sizes: "(min-width: 768px) 42vw, 88vw" },
] as const

export default function ProjectsPage() {
  useDocumentMeta(
    "Projetos",
    "Portfólio do ARCH STUDIO: projetos residenciais, comerciais, de interiores e institucionais em diversas cidades do Brasil."
  )

  const reduceMotion = useReducedMotion()
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get("categoria") ?? ALL
  const active = PROJECT_CATEGORIES.some((c) => toParam(c) === requested) ? requested : ALL

  const visible = active === ALL ? projects : projects.filter((p) => toParam(p.category) === active)

  const options: FilterOption[] = [
    { value: ALL, label: "Todos", count: projects.length },
    ...PROJECT_CATEGORIES.map((category) => ({
      value: toParam(category),
      label: category,
      count: projects.filter((p) => p.category === category).length,
    })),
  ]

  const handleChange = (value: string) => {
    setSearchParams(value === ALL ? {} : { categoria: value }, { replace: true, preventScrollReset: true })
  }

  return (
    <>
      <PageIntro
        eyebrow="Projetos"
        title="Obras e projetos, de 2020 a hoje."
        intro={
          <p>
            Uma seleção de casas, escritórios, interiores e edifícios públicos. Cada projeto parte de um lugar específico
            e de uma pergunta diferente.
          </p>
        }
      />

      <section aria-label="Lista de projetos" className="frame pb-[clamp(6rem,14vw,13rem)]">
        <Reveal className="flex flex-col gap-6 border-t border-stone/40 pt-6 md:flex-row md:items-center md:justify-between">
          <CategoryFilter options={options} active={active} onChange={handleChange} />
          <p className="eyebrow text-stone-deep" aria-live="polite">
            {pad(visible.length)} {visible.length === 1 ? "projeto" : "projetos"}
          </p>
        </Reveal>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="mt-16 grid grid-cols-12 gap-x-6 gap-y-20 md:mt-24 md:gap-y-28"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -12 }}
            transition={{ duration: DURATION.base, ease: EASE }}
          >
            {visible.map((project, index) => {
              const layout = GRID_PATTERN[index % GRID_PATTERN.length]
              return (
                <Reveal key={project.slug} className={cn("col-span-12", layout.className)} delay={(index % 2) * 0.08}>
                  <ProjectCard
                    project={project}
                    ratio={layout.ratio}
                    sizes={layout.sizes}
                    index={pad(projects.indexOf(project) + 1)}
                    headingLevel="h2"
                  />
                </Reveal>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  )
}
