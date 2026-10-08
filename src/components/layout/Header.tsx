import { useCallback, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router"

import { cn } from "@/lib/utils"
import { navItems } from "@/data/site"
import { useScrolled } from "@/hooks/useScrolled"
import { Logo } from "./Logo"
import { MobileMenu } from "./MobileMenu"

export function Header() {
  const { pathname } = useLocation()
  const scrolled = useScrolled(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Transparente com texto claro sobre o hero da Home; off-white depois da rolagem.
  const overHero = pathname === "/" && !scrolled

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,color,border-color] duration-500 ease-editorial",
          overHero && "border-transparent bg-transparent text-paper",
          !overHero && scrolled && "border-stone/30 bg-paper/95 text-ink backdrop-blur-sm",
          !overHero && !scrolled && "border-transparent bg-transparent text-ink"
        )}
      >
        <div className="frame flex h-20 items-center justify-between md:h-24">
          <Logo />

          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-10 lg:gap-14">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "eyebrow relative py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-editorial hover:after:scale-x-100",
                        isActive ? "after:scale-x-100" : "after:scale-x-0"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="eyebrow -mr-2 cursor-pointer p-2 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  )
}
