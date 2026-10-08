import type { ReactNode } from "react"

import { ContactForm } from "@/components/contact/ContactForm"
import { Figure } from "@/components/shared/Figure"
import { PageIntro } from "@/components/shared/PageIntro"
import { Reveal } from "@/components/shared/Reveal"
import { PHOTOS } from "@/data/photos"
import { site } from "@/data/site"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"

function InfoBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-stone/40 py-6">
      <h2 className="eyebrow text-stone-deep">{title}</h2>
      <div className="mt-3 text-base leading-relaxed">{children}</div>
    </div>
  )
}

const linkClass = "underline-offset-[6px] decoration-stone transition-colors hover:underline"

export default function ContactPage() {
  useDocumentMeta(
    "Contato",
    "Fale com o ARCH STUDIO. Endereço, e-mail, telefone e formulário para iniciar o seu projeto de arquitetura ou interiores."
  )

  return (
    <>
      <PageIntro
        eyebrow="Contato"
        title="Conte-nos sobre o seu projeto."
        intro={
          <p>
            Preencha o formulário ou fale diretamente com a nossa equipe. Toda conversa começa sem compromisso — e muitas
            vezes com um café no estúdio.
          </p>
        }
      />

      <section aria-label="Formulário e informações de contato" className="frame pb-[clamp(6rem,14vw,13rem)]">
        <div className="grid grid-cols-12 gap-x-6 gap-y-20">
          <Reveal className="col-span-12 border-t border-ink pt-10 md:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.1}>
            <address className="not-italic">
              <InfoBlock title="Endereço">
                {site.address.street}
                <br />
                {site.address.district} — {site.address.city}
                <br />
                CEP {site.address.zip}
              </InfoBlock>
              <InfoBlock title="E-mail">
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </InfoBlock>
              <InfoBlock title="Telefone">
                <a href={site.phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </InfoBlock>
            </address>
            <InfoBlock title="Redes sociais">
              <ul className="flex flex-wrap gap-x-6 gap-y-1">
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer" className={linkClass}>
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoBlock>
            <InfoBlock title="Horário">
              {site.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </InfoBlock>

            <Figure
              className="mt-10 ml-auto w-3/4"
              photo={{ id: PHOTOS.clayInterior, alt: "Interior do estúdio com mesa de reunião e luz natural", tone: "earth" }}
              ratio="4 / 5"
              sizes="(min-width: 768px) 25vw, 75vw"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
