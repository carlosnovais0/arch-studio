export const site = {
  name: "ARCH STUDIO",
  tagline: "Arquitetura que dá forma à luz, à matéria e ao tempo.",
  foundedYear: 2009,
  address: {
    street: "Avenida Professor Luiz Ignácio Anhaia Mello, 5.500",
    district: "Vila Prudente",
    city: "São Paulo, SP",
    zip: "03987-200",
  },
  email: "contato@archstudio.com.br",
  phone: "+55 44 3001-5060",
  phoneHref: "tel:+554430015060",
  hours: ["Segunda a sexta, das 9h às 18h", "Visitas ao estúdio com agendamento"],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Pinterest", href: "https://www.pinterest.com/" },
  ],
} as const

export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: "Sobre", to: "/sobre" },
  { label: "Projetos", to: "/projetos" },
  { label: "Serviços", to: "/servicos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: "17", label: "Anos de atuação" },
  { value: "140+", label: "Projetos entregues" },
  { value: "23", label: "Prêmios e menções" },
  { value: "9", label: "Estados brasileiros" },
]

export interface Principle {
  title: string
  text: string
}

export const manifesto: Principle[] = [
  {
    title: "O lugar antes da forma",
    text: "Cada projeto nasce da leitura do terreno, do clima e da cidade. A forma é consequência, nunca ponto de partida.",
  },
  {
    title: "Poucos materiais, bem usados",
    text: "Preferimos uma paleta contida de materiais honestos, escolhidos pelo que fazem bem e pela forma como envelhecem.",
  },
  {
    title: "A luz como protagonista",
    text: "Desenhamos aberturas, sombras e percursos para que a luz natural transforme os espaços ao longo do dia.",
  },
  {
    title: "Construir menos, construir melhor",
    text: "Reabilitar, reaproveitar e dimensionar com precisão é a nossa forma de responder à urgência ambiental.",
  },
]

export interface Milestone {
  year: number
  text: string
}

export const timeline: Milestone[] = [
  { year: 2009, text: "Helena Vasconcelos funda o estúdio em uma sala na Vila Madalena, em São Paulo." },
  { year: 2012, text: "Primeiro projeto institucional: a reforma de uma escola pública em Campinas." },
  { year: 2015, text: "Rafael Monteiro se torna sócio e o estúdio passa a atuar em projetos corporativos." },
  { year: 2018, text: "Criação do núcleo de interiores, coordenado por Júlia Prado." },
  { year: 2020, text: "Conclusão da Biblioteca Pública de Tiradentes, primeiro projeto em sítio tombado." },
  { year: 2024, text: "Mudança para o novo estúdio, um galpão reabilitado na Rua Fradique Coutinho." },
]
