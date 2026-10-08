import { ArrowRight } from "lucide-react"
import { Link } from "react-router"

import { ArrowLink } from "@/components/shared/ArrowLink"
import { Figure } from "@/components/shared/Figure"
import { Reveal } from "@/components/shared/Reveal"
import { Button } from "@/components/ui/button"
import { PHOTOS } from "@/data/photos"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"

export default function NotFoundPage() {
  useDocumentMeta("Página não encontrada", "A página que você procura não existe ou foi movida.")

  return (
    <section className="frame pt-36 pb-[clamp(6rem,14vw,13rem)] md:pt-48">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <Reveal className="col-span-12 md:col-span-7">
          <p className="eyebrow text-stone-deep">Erro 404</p>
          <p aria-hidden className="display mt-6 text-[clamp(8rem,26vw,24rem)] leading-[0.75] text-sand">
            404
          </p>
          <h1 className="display mt-10 text-[clamp(2.5rem,5vw,5rem)] text-balance">
            Esta página não existe — ou ainda não foi construída.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-stone-deep">
            O endereço pode ter mudado ou sido digitado incorretamente. Que tal recomeçar pela página inicial ou ver os
            nossos projetos?
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Button asChild>
              <Link to="/">
                Página inicial
                <ArrowRight aria-hidden />
              </Link>
            </Button>
            <ArrowLink to="/projetos">Ver projetos</ArrowLink>
          </div>
        </Reveal>

        <Reveal className="col-span-8 col-start-5 md:col-span-4 md:col-start-9 md:mt-40" delay={0.1}>
          <Figure
            photo={{ id: PHOTOS.glassCorridor, alt: "Corredor vazio com luz lateral", tone: "mono" }}
            ratio="3 / 4"
            sizes="(min-width: 768px) 33vw, 66vw"
          />
        </Reveal>
      </div>
    </section>
  )
}
