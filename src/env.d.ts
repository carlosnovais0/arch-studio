/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Endpoint do formulário de contato (Formspree ou Web3Forms). Opcional. */
  readonly VITE_CONTACT_ENDPOINT?: string
  /** Chave de acesso do Web3Forms. Necessária apenas ao usar o Web3Forms. */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
