import { Link } from "react-router"

import { Figure } from "@/components/shared/Figure"
import type { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  ratio: string
  sizes: string
  /** Numeração editorial exibida ao lado do título (ex.: "01"). */
  index?: string
  className?: string
  headingLevel?: "h2" | "h3"
}

export function ProjectCard({ project, ratio, sizes, index, className, headingLevel = "h3" }: ProjectCardProps) {
  const Heading = headingLevel

  return (
    <article className={cn("group", className)}>
      <Link to={`/projetos/${project.slug}`} className="block focus-visible:outline-offset-8">
        <Figure photo={project.cover} ratio={ratio} sizes={sizes} zoom />
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <Heading className="display text-[clamp(1.75rem,2.5vw,2.5rem)] leading-[1.05] transition-colors duration-500 group-hover:text-stone-deep">
              {project.title}
            </Heading>
            <p className="eyebrow mt-3 text-stone-deep">
              {project.location} <span aria-hidden>—</span> {project.year}
            </p>
          </div>
          {index ? <span className="eyebrow pt-2 text-stone-deep tabular-nums">{index}</span> : null}
        </div>
      </Link>
    </article>
  )
}
