# ARCH STUDIO

Site institucional do estúdio de arquitetura **ARCH STUDIO**: minimalista, editorial e responsivo, com todo o conteúdo em português do Brasil.

**Stack:** React 19, Vite 8, TypeScript 6, Tailwind CSS 4, shadcn/ui (base Radix, componentes personalizados), React Router 8, Framer Motion, react-hook-form, zod e lucide-react.

## Requisitos

- Node.js 20.19 ou mais recente (testado com Node 24)
- npm 10 ou mais recente

## Instalação e execução

```bash
npm install
npm run dev        # servidor de desenvolvimento em http://localhost:5173
```

| Script            | O que faz                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento com recarga instantânea    |
| `npm run build`   | Verifica os tipos (`tsc -b`) e gera a versão de produção em `dist/` |
| `npm run preview` | Serve a pasta `dist/` localmente para conferência      |
| `npm run lint`    | Lint com oxlint (inclui regras de acessibilidade e proíbe `any`) |

## Formulário de contato

O formulário (`/contato`) valida os campos com zod, mostra mensagens de erro em português e informa o resultado do envio com toasts: carregando, sucesso ou erro.

O envio é feito com `fetch` para o endpoint definido em `VITE_CONTACT_ENDPOINT`. **Sem essa variável, o envio é simulado:** o formulário espera 1,2 s, mostra o toast de sucesso e registra os dados no console do navegador. Assim, o site funciona em desenvolvimento sem nenhuma configuração.

### Configuração

1. Copie o arquivo de exemplo:

   ```bash
   cp .env.example .env
   ```

2. Escolha um serviço e preencha o `.env`.

   **Formspree**

   1. Crie um formulário em [formspree.io](https://formspree.io) e copie o endpoint (`https://formspree.io/f/xxxxxxx`).
   2. No `.env`:

      ```env
      VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxx
      ```

   **Web3Forms**

   1. Gere uma chave de acesso em [web3forms.com](https://web3forms.com).
   2. No `.env`:

      ```env
      VITE_CONTACT_ENDPOINT=https://api.web3forms.com/submit
      VITE_WEB3FORMS_ACCESS_KEY=sua-chave-de-acesso
      ```

3. Reinicie o `npm run dev`. O Vite só lê variáveis de ambiente na inicialização. Em produção, defina as mesmas variáveis no painel da hospedagem antes do build.

Os campos enviados são `name`, `email`, `phone`, `projectType`, `message`, `subject` e `from_name`, além de `access_key` quando o Web3Forms é usado. Respostas HTTP de erro, ou `{ "success": false }` no caso do Web3Forms, exibem o toast de erro.

> Variáveis com prefixo `VITE_` são embutidas no JavaScript público. A chave do Web3Forms foi feita para ficar exposta, mas não coloque segredos de outros serviços nessas variáveis.

## Estrutura

```
src/
  data/             Conteúdo tipado: projects, posts, services, team, awards, site e photos
  pages/            Uma página por rota, carregada sob demanda (exceto Home e 404)
  components/
    ui/             Componentes shadcn personalizados (button, input, textarea, select, label, sonner)
    layout/         Header, MobileMenu, Footer, Layout (transição de página), Logo
    shared/         Reveal, Figure, SectionHeading, PageIntro, ArrowLink, ContactCta
    home/ about/ projects/ blog/ contact/
  hooks/            useDocumentMeta (título e meta description), useScrolled
  lib/              contact (schema zod e envio), images (URLs do Unsplash), motion, format, utils
  index.css         Tokens do tema (paleta, fontes), utilitários editoriais e estilos base
```

### Rotas

| Rota               | Página                     |
| ------------------ | -------------------------- |
| `/`                | Home                       |
| `/sobre`           | Sobre                      |
| `/projetos`        | Projetos (filtro em `?categoria=residencial`, por exemplo) |
| `/projetos/:slug`  | Detalhe do projeto         |
| `/servicos`        | Serviços                   |
| `/blog`            | Blog                       |
| `/blog/:slug`      | Post do blog               |
| `/contato`         | Contato                    |
| `*`                | 404                        |

## Conteúdo

Todo o conteúdo fica em `src/data/`. Para adicionar um projeto, inclua um objeto no array `projects` em `projects.ts`. O slug vira a URL `/projetos/<slug>` e o projeto entra automaticamente no grid, no filtro e na navegação anterior/próximo. Para que ele apareça na Home, use `featured: true`. Posts seguem a mesma lógica em `posts.ts`, com o corpo escrito em blocos tipados: `paragraph`, `heading`, `quote` e `image`.

As fotos vêm do Unsplash. Os identificadores ficam em `src/data/photos.ts`, e cada um foi verificado (HTTP 200) e conferido visualmente. A URL final, com `srcset` em cinco larguras, é montada por `src/lib/images.ts`. Cada foto recebe um tratamento via CSS com a propriedade `tone`: `mono` (preto e branco), `earth` (tons terrosos) ou `none`.

## Design

- **Paleta** (tokens em `src/index.css`): `paper` #F5F2EC, `ink` #111111, `sand` #D9CDB8, `stone` #8A857C. Há também `stone-deep` (#5F5A52), usado em textos secundários pequenos sobre o fundo claro. O `stone` original tem contraste de cerca de 3,3:1 sobre o off-white, abaixo do mínimo AA para texto pequeno, e por isso fica reservado para linhas, numerais grandes e textos sobre fundo escuro.
- **Tipografia:** Cormorant Garamond (display, peso 300) e Inter (corpo e rótulos), via Google Fonts.
- **Utilitários:** `eyebrow` (rótulos em caixa alta), `display`, `frame` (contêiner com margens largas), `section-y` (respiro vertical), `tone-mono` e `tone-earth`.
- **Movimento:** transições de 400 a 700 ms, revelação ao entrar na viewport, zoom de 1.04 nas imagens no hover e transição entre páginas. Tudo é desativado com `prefers-reduced-motion`.

## Publicação

O site é uma SPA. Configure a hospedagem para responder com `index.html` em qualquer rota:

- **Netlify:** crie `public/_redirects` com a linha `/*  /index.html  200`
- **Vercel:** use `vercel.json` com `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
