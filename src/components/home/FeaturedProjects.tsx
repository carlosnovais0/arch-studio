import { ProjectCard } from "@/components/projects/ProjectCard"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { featuredProjects } from "@/data/projects"
import { pad } from "@/lib/format"

/** Composição assimétrica: larguras, proporções e alinhamentos diferentes para cada projeto. */
const LAYOUT = [
  {
    className: "md:col-span-7",
    ratio: "4 / 3",
    sizes: "(min-width: 768px) 58vw, 100vw",
  },
  {
    className: "ml-auto w-[82%] md:col-span-4 md:col-start-9 md:mt-72 md:w-auto",
    ratio: "3 / 4",
    sizes: "(min-width: 768px) 33vw, 82vw",
  },
  {
    className: "w-[88%] md:col-span-4 md:col-start-2 md:mt-8 md:w-auto",
    ratio: "4 / 5",
    sizes: "(min-width: 768px) 33vw, 88vw",
  },
  {
    className: "md:col-span-6 md:col-start-7 md:mt-64",
    ratio: "3 / 2",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
] as const

export function FeaturedProjects() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="section-y frame scroll-mt-24">
      <SectionHeading number="01" label="Projetos selecionados" />

      <div className="mt-16 grid grid-cols-12 items-end gap-x-6 gap-y-10 md:mt-24">
        <Reveal className="col-span-12 md:col-span-7">
          <h2 id="projetos-titulo" className="display text-[clamp(2.75rem,6vw,6.5rem)] text-balance">
            Lugares feitos de luz, matéria e silêncio
          </h2>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-3 md:col-start-10 md:justify-self-end" delay={0.1}>
          <ArrowLink to="/projetos">Ver todos os projetos</ArrowLink>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-20 md:mt-32 md:gap-y-0">
        {featuredProjects.slice(0, LAYOUT.length).map((project, index) => {
          const layout = LAYOUT[index]
          return (
            <Reveal key={project.slug} className={`col-span-12 ${layout.className}`}>
              <ProjectCard project={project} ratio={layout.ratio} sizes={layout.sizes} index={pad(index + 1)} />
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
