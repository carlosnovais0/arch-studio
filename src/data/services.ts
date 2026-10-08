export interface Service {
  slug: string
  title: string
  summary: string
  description: string
  deliverables: string[]
}

export const services: Service[] = [
  {
    slug: "projeto-arquitetonico",
    title: "Projeto Arquitetônico",
    summary: "Do estudo de implantação ao projeto executivo completo.",
    description:
      "Desenvolvemos projetos residenciais, comerciais e institucionais em todas as escalas. Cada projeto parte de uma leitura atenta do lugar — clima, topografia, vizinhança e legislação — e do modo de vida de quem vai ocupá-lo.",
    deliverables: [
      "Estudo preliminar e volumetria",
      "Anteprojeto e aprovação legal",
      "Projeto executivo e detalhamento",
      "Coordenação de projetos complementares",
    ],
  },
  {
    slug: "interiores",
    title: "Interiores",
    summary: "Ambientes desenhados por inteiro, da planta à marcenaria.",
    description:
      "Tratamos o interior como continuação da arquitetura. Projetamos layout, marcenaria, iluminação, revestimentos e mobiliário, sempre com materiais que envelhecem bem e uma paleta que valoriza a luz natural.",
    deliverables: [
      "Layout e fluxos",
      "Projeto de marcenaria sob medida",
      "Projeto luminotécnico",
      "Curadoria de mobiliário e objetos",
    ],
  },
  {
    slug: "consultoria",
    title: "Consultoria",
    summary: "Apoio técnico para decisões antes de comprar, construir ou reformar.",
    description:
      "Avaliamos terrenos e imóveis antes da compra, analisamos o potencial construtivo, revisamos projetos de terceiros e orientamos incorporadores e instituições na definição de programas e concursos.",
    deliverables: [
      "Estudo de viabilidade e potencial construtivo",
      "Due diligence de imóveis",
      "Revisão técnica de projetos",
      "Programas para concursos e editais",
    ],
  },
  {
    slug: "acompanhamento-de-obra",
    title: "Acompanhamento de Obra",
    summary: "Presença constante para que o projeto seja construído como foi desenhado.",
    description:
      "Visitamos a obra semanalmente, respondemos às dúvidas da construtora, aprovamos amostras e protótipos e verificamos a conformidade com o projeto. É a garantia de que as decisões tomadas no papel chegam intactas ao canteiro.",
    deliverables: [
      "Visitas técnicas semanais",
      "Relatórios fotográficos",
      "Aprovação de amostras e protótipos",
      "Apoio na contratação de fornecedores",
    ],
  },
  {
    slug: "retrofit",
    title: "Retrofit",
    summary: "Reabilitação de edifícios existentes para novos usos e padrões de desempenho.",
    description:
      "Damos nova vida a edifícios existentes, preservando estrutura e memória. Conduzimos diagnóstico técnico, adequação a normas de acessibilidade e segurança e melhoria do desempenho térmico e energético.",
    deliverables: [
      "Diagnóstico técnico e levantamento cadastral",
      "Estudo de novos usos",
      "Adequação normativa e de acessibilidade",
      "Projeto de eficiência energética",
    ],
  },
]

export interface ProcessStep {
  title: string
  duration: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    title: "Escuta",
    duration: "1 a 2 semanas",
    description:
      "Conversas para entender necessidades, rotina e expectativas. Visita ao terreno ou imóvel e levantamento da legislação.",
  },
  {
    title: "Estudo preliminar",
    duration: "3 a 6 semanas",
    description:
      "Primeiras hipóteses de implantação, volumetria e organização do programa, apresentadas em desenhos, maquetes e imagens.",
  },
  {
    title: "Anteprojeto",
    duration: "4 a 8 semanas",
    description:
      "Definição precisa de plantas, cortes, fachadas e materiais. Submissão aos órgãos competentes e início da coordenação técnica.",
  },
  {
    title: "Projeto executivo",
    duration: "8 a 16 semanas",
    description:
      "Detalhamento completo para orçamento e construção, compatibilizado com estrutura, instalações e paisagismo.",
  },
  {
    title: "Obra",
    duration: "Conforme o escopo",
    description:
      "Acompanhamento semanal da construção, aprovação de amostras e ajustes até a entrega final.",
  },
]
