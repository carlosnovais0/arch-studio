import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, LoaderCircle } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/data/site"
import { type ContactFormValues, PROJECT_TYPES, contactSchema, sendContactMessage } from "@/lib/contact"
import { errorId } from "./field-ids"
import { FormField } from "./FormField"

const DEFAULT_VALUES: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "onTouched",
  })

  const onSubmit = async (values: ContactFormValues) => {
    const toastId = toast.loading("Enviando sua mensagem…")
    try {
      await sendContactMessage(values)
      toast.success("Mensagem enviada.", {
        id: toastId,
        description: "Obrigado pelo contato. Responderemos em até dois dias úteis.",
      })
      setStatus("success")
      reset(DEFAULT_VALUES)
    } catch (error) {
      console.error(error)
      toast.error("Não foi possível enviar.", {
        id: toastId,
        description: `Tente novamente em instantes ou escreva para ${site.email}.`,
      })
      setStatus("error")
    }
  }

  const describedBy = (field: keyof ContactFormValues) => errorId(field)

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} aria-label="Formulário de contato" className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      <FormField id="name" label="Nome" error={errors.name?.message} className="sm:col-span-2">
        <Input
          id="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy("name")}
          {...register("name")}
        />
      </FormField>

      <FormField id="email" label="E-mail" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("email")}
          {...register("email")}
        />
      </FormField>

      <FormField id="phone" label="Telefone" optional error={errors.phone?.message}>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(11) 90000-0000"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={describedBy("phone")}
          {...register("phone")}
        />
      </FormField>

      <FormField id="projectType" label="Tipo de projeto" error={errors.projectType?.message} className="sm:col-span-2">
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange} name={field.name}>
              <SelectTrigger
                id="projectType"
                ref={field.ref}
                onBlur={field.onBlur}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={describedBy("projectType")}
              >
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                {PROJECT_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField id="message" label="Mensagem" error={errors.message?.message} className="sm:col-span-2">
        <Textarea
          id="message"
          rows={5}
          placeholder="Conte-nos sobre o projeto: local, metragem, prazo e o que você imagina."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          {...register("message")}
        />
      </FormField>

      <div className="flex flex-col items-start gap-6 pt-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-stone-deep">
          Usamos seus dados apenas para responder a esta mensagem.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? (
            <>
              Enviando
              <LoaderCircle aria-hidden className="animate-spin" />
            </>
          ) : (
            <>
              Enviar mensagem
              <ArrowRight aria-hidden />
            </>
          )}
        </Button>
      </div>

      <output aria-live="polite" className="sr-only">
        {status === "success" ? "Mensagem enviada com sucesso." : null}
        {status === "error" ? "Não foi possível enviar a mensagem." : null}
      </output>
    </form>
  )
}
