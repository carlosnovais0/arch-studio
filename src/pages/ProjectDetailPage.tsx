import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Link, useParams } from "react-router"

import { Figure } from "@/components/shared/Figure"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { type Project, getAdjacentProjects, getProject } from "@/data/projects"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { pad } from "@/lib/format"
import { DURATION, EASE } from "@/lib/motion"
import NotFoundPage from "./NotFoundPage"

/** Galeria com tamanhos alternados: plena, par deslocado, central, lateral. */
const GALLERY_LAYOUT = [
  { className: "col-span-12", ratio: "16 / 9", sizes: "100vw" },
  { className: "col-span-12 md:col-span-5", ratio: "4 / 5", sizes: "(min-width: 768px) 42vw, 100vw" },
  { className: "col-span-12 md:col-span-6 md:col-start-7 md:mt-40", ratio: "1 / 1", sizes: "(min-width: 768px) 50vw, 100vw" },
  { className: "col-span-12 md:col-span-8 md:col-start-3", ratio: "3 / 2", sizes: "(min-width: 768px) 66vw, 100vw" },
  { className: "col-span-12 md:col-span-4 md:col-start-9", ratio: "4 / 5", sizes: "(min-width: 768px) 33vw, 100vw" },
] as const

export default function ProjectDetailPage() {
  const { slug = "" } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFoundPage />
  return <ProjectDetail project={project} />
}

function ProjectDetail({ project }: { project: Project }) {
  useDocumentMeta(project.title, `${project.title}, ${project.location} (${project.year}). ${project.summary}`)
  const reduceMotion = useReducedMotion()
  const adjacent = getAdjacentProjects(project.slug)

  const facts: Array<[string, string]> = [
    ["Local", project.location],
    ["Ano", String(project.year)],
    ["Área", project.area],
    ["Tipologia", project.typology],
    ["Categoria", project.category],
    ["Status", project.status],
  ]

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION.slow, ease: EASE, delay },
  })

  return (
    <article>
      <header className="frame pt-36 pb-14 md:pt-48 md:pb-20">
        <motion.div {...enter(0)}>
          <Link
            to="/projetos"
            className="eyebrow inline-flex items-center gap-3 text-stone-deep transition-colors hover:text-ink"
          >
            <ArrowLeft aria-hidden className="size-3.5 stroke-[1.25]" />
            Todos os projetos
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-16">
          <motion.h1
            className="display col-span-12 text-[clamp(3rem,8vw,8.5rem)] text-balance md:col-span-9"
            {...enter(0.08)}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className="eyebrow col-span-12 text-stone-deep md:col-span-3 md:self-end md:pb-4 md:text-right"
            {...enter(0.14)}
          >
            {project.category} <span aria-hidden>—</span> {project.location} <span aria-hidden>—</span> {project.year}
          </motion.p>
        </div>
      </header>

      <motion.div className="frame" {...enter(0.2)}>
        <Figure
          photo={project.cover}
          ratioClassName="aspect-[4/5] sm:aspect-[3/2] md:aspect-[16/8]"
          sizes="100vw"
          priority
        />
      </motion.div>

      <section aria-label="Sobre o projeto" className="section-y frame">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          <Reveal className="col-span-12 md:col-span-4 lg:col-span-3">
            <h2 className="eyebrow mb-6 text-ink">Ficha técnica</h2>
            <dl className="border-t border-stone/40">
              {facts.map(([term, value]) => (
                <div key={term} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-stone/40 py-4 text-sm">
                  <dt className="eyebrow pt-0.5 text-stone-deep">{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-stone/40 py-4 text-sm">
                <dt className="eyebrow pt-0.5 text-stone-deep">Equipe</dt>
                <dd>
                  <ul>
                    {project.team.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-6" delay={0.1}>
            <p className="display text-[clamp(1.875rem,3.2vw,3rem)] leading-[1.12] text-balance">{project.summary}</p>
            <div className="mt-12 max-w-[65ch] space-y-6 text-base leading-relaxed text-stone-deep md:text-[1.0625rem]">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="galeria-titulo" className="frame pb-[clamp(6rem,14vw,13rem)]">
        <SectionHeading number={pad(project.gallery.length)} label="Imagens" />
        <h2 id="galeria-titulo" className="sr-only">
          Galeria
        </h2>
        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-24 md:gap-y-24">
          {project.gallery.map((photo, index) => {
            const layout = GALLERY_LAYOUT[index % GALLERY_LAYOUT.length]
            return (
              <Reveal key={photo.id} className={layout.className}>
                <Figure photo={photo} ratio={layout.ratio} sizes={layout.sizes} caption={`Fig. ${pad(index + 1)}`} />
              </Reveal>
            )
          })}
        </div>
      </section>

      {adjacent ? (
        <nav aria-label="Navegação entre projetos" className="frame">
          <div className="grid border-t border-stone/40 md:grid-cols-2">
            <Link
              to={`/projetos/${adjacent.previous.slug}`}
              className="group border-b border-stone/40 py-12 md:border-r md:border-b-0 md:py-20 md:pr-12"
            >
              <span className="eyebrow inline-flex items-center gap-3 text-stone-deep">
                <ArrowLeft aria-hidden className="size-3.5 stroke-[1.25] transition-transform duration-500 ease-editorial group-hover:-translate-x-1" />
                Projeto anterior
              </span>
              <span className="display mt-6 block text-[clamp(2rem,4vw,4rem)] transition-colors duration-500 group-hover:text-stone-deep">
                {adjacent.previous.title}
              </span>
            </Link>
            <Link
              to={`/projetos/${adjacent.next.slug}`}
              className="group py-12 text-left md:py-20 md:pl-12 md:text-right"
            >
              <span className="eyebrow inline-flex items-center gap-3 text-stone-deep">
                Próximo projeto
                <ArrowRight aria-hidden className="size-3.5 stroke-[1.25] transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
              </span>
              <span className="display mt-6 block text-[clamp(2rem,4vw,4rem)] transition-colors duration-500 group-hover:text-stone-deep">
                {adjacent.next.title}
              </span>
            </Link>
          </div>
        </nav>
      ) : null}
    </article>
  )
}
