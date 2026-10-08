export interface Award {
  year: number
  title: string
  project: string
}

export const awards: Award[] = [
  { year: 2025, title: "Prêmio Arquitetura Brasileira Contemporânea — Residencial", project: "Casa Pedra Branca" },
  { year: 2024, title: "Bienal de Arquitetura — Menção Honrosa", project: "Sede Terrae" },
  { year: 2023, title: "Prêmio Design de Interiores Brasil — Ouro", project: "Apartamento Higienópolis" },
  { year: 2023, title: "Prêmio Arquitetura e Comunidade — Edifício Cultural", project: "Pavilhão Cultural Serra do Mar" },
  { year: 2022, title: "Selo Construção Sustentável — Destaque", project: "Casa Cerrado" },
  { year: 2021, title: "Prêmio Patrimônio e Contemporaneidade", project: "Biblioteca Pública de Tiradentes" },
]

export const clients: string[] = [
  "Terrae Engenharia",
  "Fundação Caiçara",
  "Grupo Alameda",
  "Prefeitura de Tiradentes",
  "Casa Botânica",
  "Vértice Incorporações",
  "Instituto Paraty",
  "Hotel Vila Serrana",
  "Banco Litoral",
  "Editora Margem",
]
