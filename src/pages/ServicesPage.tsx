import { ContactCta } from "@/components/shared/ContactCta"
import { Figure } from "@/components/shared/Figure"
import { PageIntro } from "@/components/shared/PageIntro"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PHOTOS } from "@/data/photos"
import { processSteps, services } from "@/data/services"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { pad } from "@/lib/format"

/** Etapas em degraus: cada uma desce um pouco em relação à anterior no desktop. */
const stepOffset = ["", "md:mt-12", "md:mt-24", "md:mt-36", "md:mt-48"] as const

export default function ServicesPage() {
  useDocumentMeta(
    "Serviços",
    "Projeto arquitetônico, interiores, consultoria, acompanhamento de obra e retrofit. Conheça os serviços e o processo de trabalho do ARCH STUDIO."
  )

  return (
    <>
      <PageIntro
        eyebrow="Serviços"
        title="Da primeira conversa à entrega da obra."
        intro={
          <p>
            Atuamos em todas as etapas do projeto, com uma equipe enxuta e próxima. Você pode contratar o percurso
            completo ou apenas o serviço de que precisa.
          </p>
        }
      />

      <section aria-labelledby="servicos-titulo" className="frame pb-[clamp(6rem,14vw,13rem)]">
        <SectionHeading number="01" label="O que fazemos" />
        <h2 id="servicos-titulo" className="sr-only">
          Serviços
        </h2>

        <ol className="mt-16 md:mt-24">
          {services.map((service, index) => (
            <li key={service.slug} className="border-t border-stone/40 last:border-b">
              <Reveal className="grid grid-cols-12 gap-x-6 gap-y-6 py-12 md:py-16">
                <span className="display col-span-2 text-[clamp(2.25rem,4vw,4rem)] leading-none text-stone">
                  {pad(index + 1)}
                </span>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="display text-[clamp(2rem,3.4vw,3.5rem)] leading-[1.02]">{service.title}</h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-deep">{service.summary}</p>
                </div>
                <div className="col-span-12 md:col-span-5 md:col-start-8">
                  <p className="text-base leading-relaxed">{service.description}</p>
                  <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 border-t border-stone/30 py-3 text-sm text-stone-deep">
                        <span aria-hidden className="text-stone">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="processo-titulo" className="section-y bg-sand/45">
        <div className="frame">
          <SectionHeading number="02" label="Processo" />
          <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-28">
            <Reveal className="col-span-12 md:col-span-6">
              <h2 id="processo-titulo" className="display text-[clamp(2.5rem,5vw,5rem)] text-balance">
                Um método claro, etapa por etapa
              </h2>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-4 md:col-start-9 md:self-end" delay={0.1}>
              <p className="text-base leading-relaxed text-stone-deep">
                Cada etapa termina com uma apresentação e uma aprovação formal. Assim, as decisões são tomadas no
                momento certo e o orçamento permanece sob controle.
              </p>
            </Reveal>
          </div>

          <ol className="mt-20 grid gap-y-12 md:mt-28 md:grid-cols-5 md:gap-x-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className={stepOffset[index]}>
                <Reveal delay={index * 0.06} className="border-t border-ink pt-6">
                  <span className="eyebrow text-stone-deep tabular-nums">Etapa {pad(index + 1)}</span>
                  <h3 className="display mt-5 text-[clamp(1.75rem,2.4vw,2.25rem)] leading-tight">{step.title}</h3>
                  <p className="eyebrow mt-3 text-ink">{step.duration}</p>
                  <p className="mt-5 text-sm leading-relaxed text-stone-deep">{step.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Imagens do processo" className="section-y frame">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 md:col-span-7">
            <Figure
              photo={{ id: PHOTOS.drawings, alt: "Desenho técnico em andamento sobre a prancheta", tone: "mono" }}
              ratio="3 / 2"
              sizes="(min-width: 768px) 58vw, 100vw"
              caption="Estudo preliminar"
            />
          </Reveal>
          <Reveal className="col-span-10 col-start-3 md:col-span-4 md:col-start-9 md:mt-48" delay={0.1}>
            <Figure
              photo={{ id: PHOTOS.timberStructure, alt: "Estrutura de madeira em obra", tone: "earth" }}
              ratio="4 / 5"
              sizes="(min-width: 768px) 33vw, 80vw"
              caption="Acompanhamento de obra"
            />
          </Reveal>
        </div>
      </section>

      <ContactCta number="03" />
    </>
  )
}
