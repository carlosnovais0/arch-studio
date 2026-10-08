import type { CSSProperties } from "react"
import { CircleAlert, CircleCheck, Info, LoaderCircle, TriangleAlert } from "lucide-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const iconClass = "size-4 stroke-[1.25]"

/** Toaster com a aparência do estúdio: fundo preto, cantos retos, tipografia Inter. */
const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="bottom-right"
      className="toaster group"
      icons={{
        success: <CircleCheck className={iconClass} />,
        info: <Info className={iconClass} />,
        warning: <TriangleAlert className={iconClass} />,
        error: <CircleAlert className={iconClass} />,
        loading: <LoaderCircle className={`${iconClass} animate-spin`} />,
      }}
      style={
        {
          "--normal-bg": "var(--color-ink)",
          "--normal-text": "var(--color-paper)",
          "--normal-border": "var(--color-ink)",
          "--border-radius": "0px",
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "!rounded-none !font-sans !shadow-none !gap-3 !px-5 !py-4",
          title: "!text-sm !font-normal !tracking-normal",
          description: "!text-xs !text-sand",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
