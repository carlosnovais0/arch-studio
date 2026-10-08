import * as React from "react"

import { cn } from "@/lib/utils"

/** Campo de texto editorial: apenas a linha inferior, sem caixa. */
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-none border-0 border-b border-stone bg-transparent px-0 py-2 font-sans text-base text-ink transition-colors duration-500 ease-editorial outline-none placeholder:text-stone focus-visible:border-ink focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
