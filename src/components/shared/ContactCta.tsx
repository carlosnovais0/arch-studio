import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

interface ContactCtaProps {
  number?: string
}

/** Chamada para contato em seção escura. Usada na Home e em páginas internas. */
export function ContactCta({ number = "04" }: ContactCtaProps) {
  return (
    <section aria-labelledby="cta-titulo" className="section-y bg-ink text-paper">
      <div className="frame">
        <SectionHeading number={number} label="Contato" inverted />

        <div className="mt-20 grid grid-cols-12 gap-x-6 md:mt-28">
          <Reveal className="col-span-12 md:col-span-10">
            <h2 id="cta-titulo" className="display text-[clamp(3rem,8.4vw,9.5rem)] text-balance">
              Vamos desenhar o seu próximo <em className="italic">projeto</em>?
            </h2>
          </Reveal>

          <Reveal className="col-span-12 mt-16 md:col-span-4 md:col-start-8 md:mt-24" delay={0.1}>
            <p className="text-base leading-relaxed text-paper/75">
              Conte-nos sobre a sua ideia, o terreno ou o imóvel. Respondemos em até dois dias úteis para agendar uma
              primeira conversa, sem compromisso.
            </p>
            <div className="mt-10 flex flex-col items-start gap-6">
              <Button asChild variant="light" size="lg">
                <Link to="/contato">
                  Iniciar uma conversa
                  <ArrowRight aria-hidden />
                </Link>
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-paper/75 underline-offset-8 transition-colors hover:text-paper hover:underline"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
