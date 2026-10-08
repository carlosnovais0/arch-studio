import { ArrowLink } from "@/components/shared/ArrowLink"
import { Figure } from "@/components/shared/Figure"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PHOTOS } from "@/data/photos"

export function Philosophy() {
  return (
    <section aria-label="Filosofia do estúdio" className="section-y frame">
      <SectionHeading number="02" label="Filosofia" />

      <div className="mt-20 grid grid-cols-12 gap-x-6 md:mt-28">
        <Reveal className="col-span-12 md:col-span-10 md:col-start-2">
          <blockquote>
            <p className="display text-[clamp(2.25rem,5.2vw,5.5rem)] leading-[1.02] text-balance">
              “Não desenhamos objetos. Desenhamos a maneira como{" "}
              <em className="font-light italic">a luz, o vento e as pessoas</em> atravessam um lugar.”
            </p>
            <footer className="eyebrow mt-10 text-stone-deep">Helena Vasconcelos — sócia fundadora</footer>
          </blockquote>
        </Reveal>

        <Reveal className="col-span-8 mt-20 md:col-span-3 md:col-start-2 md:mt-32">
          <Figure
            photo={{ id: PHOTOS.stairLight, alt: "Escada interna iluminada por uma faixa de luz natural", tone: "mono" }}
            ratio="3 / 4"
            sizes="(min-width: 768px) 25vw, 66vw"
          />
        </Reveal>

        <Reveal className="col-span-12 mt-14 md:col-span-4 md:col-start-8 md:mt-56" delay={0.1}>
          <p className="text-base leading-relaxed text-stone-deep md:text-lg">
            Há dezessete anos, o ARCH STUDIO trabalha a partir de uma convicção simples: a boa arquitetura nasce da escuta
            — do lugar, do clima e de quem vai habitá-la. Preferimos poucos materiais, bem usados, e espaços que mudam com
            a luz ao longo do dia.
          </p>
          <ArrowLink to="/sobre" className="mt-10">
            Conheça o estúdio
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  )
}
