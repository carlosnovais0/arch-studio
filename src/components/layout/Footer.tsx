import type { ReactNode } from "react"
import { ArrowUp } from "lucide-react"
import { Link } from "react-router"

import { navItems, site } from "@/data/site"

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow mb-6 text-stone">{title}</h2>
      <ul className="space-y-3 text-sm text-paper/80">{children}</ul>
    </div>
  )
}

const linkClass = "transition-colors duration-500 hover:text-paper"

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="frame pt-24 pb-10 md:pt-36">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <p className="display max-w-md text-[clamp(1.875rem,3vw,2.75rem)] leading-[1.05]">{site.tagline}</p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <FooterColumn title="Navegação">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>
          </div>

          <div className="md:col-span-2">
            <FooterColumn title="Redes">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer" className={linkClass}>
                    {social.label}
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>

          <div className="col-span-2 md:col-span-2">
            <FooterColumn title="Contato">
              <li>
                <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </li>
              <li className="pt-3 leading-relaxed text-paper/60">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city}
              </li>
            </FooterColumn>
          </div>
        </div>

        <p
          aria-hidden
          className="display mt-24 -ml-[0.04em] text-[clamp(3.25rem,13.6vw,16.5rem)] leading-[0.8] whitespace-nowrap md:mt-36"
        >
          {site.name}
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-stone">
            © {YEAR} {site.name}. Todos os direitos reservados.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="eyebrow inline-flex cursor-pointer items-center gap-2 self-start text-stone transition-colors duration-500 hover:text-paper"
          >
            Voltar ao topo
            <ArrowUp aria-hidden className="size-3.5 stroke-[1.25]" />
          </button>
        </div>
      </div>
    </footer>
  )
}
