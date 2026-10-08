import { useEffect, useRef } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { NavLink } from "react-router"

import { cn } from "@/lib/utils"
import { pad } from "@/lib/format"
import { DURATION, EASE } from "@/lib/motion"
import { navItems, site } from "@/data/site"
import { Logo } from "./Logo"

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

/**
 * Menu em tela cheia para telas pequenas, com links grandes em serifada.
 * Usa `<dialog>` modal nativo: o restante da página fica inerte e o foco permanece no menu.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduceMotion = useReducedMotion()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!open || !dialog) return

    if (!dialog.open) dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <AnimatePresence>
      {open ? (
        <motion.dialog
          ref={dialogRef}
          id="menu-mobile"
          aria-label="Menu"
          onCancel={(event) => {
            // Esc: fecha pelo estado do React para que a animação de saída aconteça.
            event.preventDefault()
            onClose()
          }}
          className="fixed inset-0 z-50 m-0 flex h-dvh max-h-none w-full max-w-none flex-col overflow-y-auto border-0 bg-ink p-0 text-paper backdrop:bg-transparent md:hidden"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-4%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-4%" }}
          transition={{ duration: DURATION.base, ease: EASE }}
        >
          <div className="frame flex h-20 shrink-0 items-center justify-between">
            <Logo onClick={onClose} />
            <button type="button" className="eyebrow -mr-2 cursor-pointer p-2" onClick={onClose}>
              Fechar
            </button>
          </div>

          <nav aria-label="Navegação principal" className="frame flex-1 pt-10">
            <ul className="border-t border-paper/15">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.to}
                  className="border-b border-paper/15"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: DURATION.slow, ease: EASE, delay: 0.1 + index * 0.06 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn("flex items-baseline gap-5 py-5", isActive ? "text-paper" : "text-paper/75")
                    }
                  >
                    <span className="eyebrow text-stone tabular-nums">{pad(index + 1)}</span>
                    <span className="display text-[clamp(2.75rem,12vw,4.5rem)]">{item.label}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="frame space-y-2 pt-12 pb-10 text-sm text-paper/70">
            <a href={`mailto:${site.email}`} className="block hover:text-paper">
              {site.email}
            </a>
            <a href={site.phoneHref} className="block hover:text-paper">
              {site.phone}
            </a>
          </div>
        </motion.dialog>
      ) : null}
    </AnimatePresence>
  )
}
