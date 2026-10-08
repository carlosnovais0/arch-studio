import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "field-sizing-content flex min-h-36 w-full resize-y rounded-none border-0 border-b border-stone bg-transparent px-0 py-3 font-sans text-base leading-relaxed text-ink transition-colors duration-500 ease-editorial outline-none placeholder:text-stone focus-visible:border-ink focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
