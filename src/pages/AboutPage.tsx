import { TeamGrid } from "@/components/about/TeamGrid"
import { ContactCta } from "@/components/shared/ContactCta"
import { Figure } from "@/components/shared/Figure"
import { PageIntro } from "@/components/shared/PageIntro"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { PHOTOS } from "@/data/photos"
import { manifesto, stats, timeline } from "@/data/site"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { pad } from "@/lib/format"
import { cn } from "@/lib/utils"

export default function AboutPage() {
  useDocumentMeta(
    "Sobre",
    "Conheça a história, o manifesto e a equipe do ARCH STUDIO, estúdio de arquitetura fundado em 2009 em São Paulo."
  )

  return (
    <>
      <PageIntro
        eyebrow="Sobre o estúdio"
        title="Um estúdio dedicado à arquitetura essencial."
        intro={
          <p>
            Somos um grupo de arquitetos e designers que acredita em espaços silenciosos, duradouros e atentos ao lugar.
            Projetamos casas, escritórios, interiores e edifícios públicos em todo o Brasil.
          </p>
        }
      />

      <div className="frame">
        <Figure
          photo={{ id: PHOTOS.loftOffice, alt: "Ateliê do estúdio com pé-direito alto e grandes janelas", tone: "mono" }}
          ratioClassName="aspect-[4/5] sm:aspect-[3/2] md:aspect-[21/9]"
          sizes="100vw"
          priority
        />
      </div>

      {/* História */}
      <section aria-labelledby="historia-titulo" className="section-y frame">
        <SectionHeading number="01" label="História" />
        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-28">
          <Reveal className="col-span-12 md:col-span-5">
            <h2 id="historia-titulo" className="display text-[clamp(2.5rem,5vw,5rem)] text-balance">
              Desde 2009, entre o desenho e a obra
            </h2>
          </Reveal>
          <Reveal className="col-span-12 space-y-6 text-base leading-relaxed text-stone-deep md:col-span-5 md:col-start-7 md:mt-24 md:text-lg" delay={0.1}>
            <p>
              O ARCH STUDIO nasceu em uma pequena sala na Vila Madalena, quando Helena Vasconcelos decidiu deixar um
              grande escritório para se dedicar a projetos em que pudesse acompanhar cada detalhe, do primeiro croqui à
              última visita de obra.
            </p>
            <p>
              Ao longo dos anos, o estúdio cresceu sem perder essa escala. Hoje somos catorze pessoas — arquitetos,
              designers de interiores e gestores de obra — trabalhando em um galpão reabilitado onde maquetes, amostras
              de materiais e desenhos dividem a mesma mesa.
            </p>
            <p>
              Cada projeto é conduzido por um dos sócios, do início ao fim. Acreditamos que essa continuidade é o que
              garante coerência entre a ideia e o edifício construído.
            </p>
          </Reveal>
          <Reveal className="col-span-7 md:col-span-3 md:col-start-2 md:-mt-24">
            <Figure
              photo={{ id: PHOTOS.drawings, alt: "Mãos desenhando sobre uma planta de arquitetura", tone: "earth" }}
              ratio="4 / 5"
              sizes="(min-width: 768px) 25vw, 60vw"
              caption="Croquis de estudo, 2024"
            />
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section aria-labelledby="manifesto-titulo" className="section-y bg-sand/45">
        <div className="frame">
          <SectionHeading number="02" label="Manifesto" />
          <h2 id="manifesto-titulo" className="sr-only">
            Manifesto
          </h2>
          <ol className="mt-20 grid gap-x-6 gap-y-16 md:mt-28 md:grid-cols-12">
            {manifesto.map((principle, index) => (
              <li
                key={principle.title}
                className={cn(
                  "md:col-span-5",
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-7 md:mt-32",
                  index === 2 && "md:col-start-2"
                )}
              >
                <Reveal>
                  <span className="display block text-[clamp(3rem,5vw,5rem)] text-stone">{pad(index + 1)}</span>
                  <h3 className="display mt-4 text-[clamp(1.875rem,3vw,3rem)] leading-[1.05]">{principle.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-stone-deep">{principle.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Números */}
      <section aria-labelledby="numeros-titulo" className="section-y frame">
        <SectionHeading number="03" label="Em números" />
        <h2 id="numeros-titulo" className="sr-only">
          O estúdio em números
        </h2>
        <dl className="mt-20 grid grid-cols-2 gap-y-14 md:mt-28 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="border-l border-stone/40 pl-5 md:pl-8">
              <dt className="eyebrow text-stone-deep">{stat.label}</dt>
              <dd className="display mt-4 text-[clamp(3.5rem,8vw,8rem)] leading-none">{stat.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Equipe */}
      <section aria-labelledby="equipe-titulo" className="frame pb-[clamp(6rem,14vw,13rem)]">
        <SectionHeading number="04" label="Equipe" />
        <div className="mt-20 grid grid-cols-12 gap-x-6 md:mt-28">
          <Reveal className="col-span-12 md:col-span-4">
            <h2 id="equipe-titulo" className="display text-[clamp(2.5rem,4.5vw,4.5rem)]">
              Quem desenha
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-deep">
              Sócios e coordenadores que conduzem os projetos do estúdio.
            </p>
          </Reveal>
          <div className="col-span-12 mt-16 md:col-span-8 md:mt-0">
            <TeamGrid />
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section aria-labelledby="trajetoria-titulo" className="frame pb-[clamp(6rem,14vw,13rem)]">
        <SectionHeading number="05" label="Trajetória" />
        <h2 id="trajetoria-titulo" className="sr-only">
          Linha do tempo
        </h2>
        <ol className="mt-20 border-t border-stone/40 md:mt-28">
          {timeline.map((milestone) => (
            <li key={milestone.year} className="border-b border-stone/40">
              <Reveal className="grid grid-cols-12 gap-x-6 py-8 md:py-10">
                <span className="display col-span-12 text-[clamp(2.25rem,4vw,3.75rem)] leading-none md:col-span-3">
                  {milestone.year}
                </span>
                <p className="col-span-12 mt-3 max-w-xl text-base leading-relaxed text-stone-deep md:col-span-6 md:col-start-6 md:mt-0 md:self-center">
                  {milestone.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <ContactCta number="06" />
    </>
  )
}
