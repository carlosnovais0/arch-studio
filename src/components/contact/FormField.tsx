import type { ReactNode } from "react"

import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { errorId } from "./field-ids"

interface FormFieldProps {
  id: string
  label: string
  error?: string
  optional?: boolean
  className?: string
  children: ReactNode
}

/** Rótulo, controle e mensagem de erro ligados por `id` e `aria-describedby`. */
export function FormField({ id, label, error, optional = false, className, children }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Label htmlFor={id}>
        {label}
        {optional ? <span className="tracking-normal normal-case">(opcional)</span> : null}
      </Label>
      {children}
      <p id={errorId(id)} className="min-h-5 pt-1 text-xs text-destructive" aria-live="polite">
        {error}
      </p>
    </div>
  )
}
