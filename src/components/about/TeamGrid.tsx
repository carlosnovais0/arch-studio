import { Figure } from "@/components/shared/Figure"
import { Reveal } from "@/components/shared/Reveal"
import { team } from "@/data/team"
import { cn } from "@/lib/utils"

/** A coluna do meio desce em relação às laterais, quebrando o alinhamento do grid. */
const columnOffset = ["", "md:mt-28", "md:mt-12"] as const

export function TeamGrid() {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-14 sm:gap-x-6 md:grid-cols-3 md:gap-x-10 md:gap-y-24">
      {team.map((member, index) => (
        <li key={member.name} className={cn(columnOffset[index % 3], index % 2 === 1 && "mt-12 md:mt-0")}>
          <Reveal delay={(index % 3) * 0.08}>
            <Figure photo={member.photo} ratio="3 / 4" sizes="(min-width: 768px) 30vw, 50vw" />
            <h3 className="display mt-5 text-[clamp(1.375rem,2.2vw,2rem)] leading-tight">{member.name}</h3>
            <p className="eyebrow mt-2 text-stone-deep">{member.role}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
