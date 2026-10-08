import { z } from "zod"

export const PROJECT_TYPES = [
  "Residencial",
  "Comercial",
  "Interiores",
  "Institucional",
  "Retrofit",
  "Consultoria",
] as const

const projectTypes: readonly string[] = PROJECT_TYPES

const PHONE_PATTERN = /^[\d\s()+-]{10,20}$/

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(120, "O nome deve ter no máximo 120 caracteres."),
  email: z.string().trim().min(1, "Informe seu e-mail.").pipe(z.email("Informe um e-mail válido.")),
  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || PHONE_PATTERN.test(value), "Informe um telefone válido, com DDD."),
  projectType: z.string().refine((value) => projectTypes.includes(value), "Selecione o tipo de projeto."),
  message: z
    .string()
    .trim()
    .min(20, "Conte um pouco mais sobre o projeto (mínimo de 20 caracteres).")
    .max(2000, "A mensagem deve ter no máximo 2.000 caracteres."),
})

export type ContactFormValues = z.infer<typeof contactSchema>

const SIMULATED_DELAY_MS = 1200

/**
 * Envia a mensagem para `VITE_CONTACT_ENDPOINT` (Formspree ou Web3Forms).
 * Sem endpoint configurado, simula o envio e registra os dados no console.
 */
export async function sendContactMessage(values: ContactFormValues): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS))
    console.info("[ARCH STUDIO] VITE_CONTACT_ENDPOINT não definido — envio simulado:", values)
    return
  }

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  const payload = {
    ...values,
    subject: `Novo contato pelo site — ${values.projectType}`,
    from_name: "Site ARCH STUDIO",
    ...(accessKey ? { access_key: accessKey } : {}),
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Falha no envio (HTTP ${response.status}).`)
  }

  // O Web3Forms responde 200 com { success: false } em alguns erros de validação.
  const body: unknown = await response.json().catch(() => null)
  if (body !== null && typeof body === "object" && "success" in body && body.success === false) {
    throw new Error("O serviço de formulário recusou o envio.")
  }
}
