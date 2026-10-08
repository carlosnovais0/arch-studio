import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 rounded-none border font-sans text-[0.6875rem] font-medium tracking-[0.22em] whitespace-nowrap uppercase transition-[background-color,color,border-color] duration-500 ease-editorial outline-none select-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:stroke-[1.25] [&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-editorial hover:[&_svg]:translate-x-1",
  {
    variants: {
      variant: {
        default: "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink",
        outline: "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
        light: "border-paper bg-paper text-ink hover:bg-transparent hover:text-paper",
        "outline-light": "border-paper/60 bg-transparent text-paper hover:border-paper hover:bg-paper hover:text-ink",
        ghost: "border-transparent bg-transparent text-ink hover:bg-sand/50",
        link: "h-auto border-transparent px-0 text-ink underline-offset-8 hover:underline",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5",
        lg: "h-14 px-9",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
