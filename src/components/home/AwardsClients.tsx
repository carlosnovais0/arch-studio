import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { awards, clients } from "@/data/awards"

export function AwardsClients() {
  return (
    <section aria-labelledby="premios-titulo" className="section-y frame">
      <SectionHeading number="03" label="Reconhecimento" />

      <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-14 md:mt-28">
        <Reveal className="col-span-12 md:col-span-4">
          <h2 id="premios-titulo" className="display text-[clamp(2.5rem,4.5vw,4.5rem)]">
            Prêmios e distinções
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-deep">
            Uma seleção dos reconhecimentos recebidos pelo estúdio nos últimos anos.
          </p>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-7 md:col-start-6" delay={0.1}>
          <ul className="border-t border-stone/40">
            {awards.map((award) => (
              <li
                key={`${award.year}-${award.title}`}
                className="grid grid-cols-[4rem_minmax(0,1fr)] gap-x-6 gap-y-1 border-b border-stone/40 py-6 lg:grid-cols-[5rem_minmax(0,1fr)_12rem] lg:items-baseline"
              >
                <span className="eyebrow text-stone-deep tabular-nums">{award.year}</span>
                <span className="font-serif text-xl leading-snug md:text-2xl">{award.title}</span>
                <span className="col-start-2 text-sm text-stone-deep lg:col-start-3 lg:text-right">{award.project}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-28 md:mt-40">
        <h3 className="eyebrow text-stone-deep">Clientes e parceiros</h3>
        <ul className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-4 md:gap-x-12">
          {clients.map((client, index) => (
            <li key={client} className="flex items-baseline gap-8 md:gap-12">
              <span className="display text-[clamp(1.625rem,3vw,3rem)] leading-tight text-ink/80">{client}</span>
              {index < clients.length - 1 ? (
                <span aria-hidden className="display text-[clamp(1.625rem,3vw,3rem)] text-stone/70">
                  /
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
