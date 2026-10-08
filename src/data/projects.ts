import type { Photo } from "@/lib/images"
import { PHOTOS } from "./photos"

export const PROJECT_CATEGORIES = ["Residencial", "Comercial", "Interiores", "Institucional"] as const

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

export type ProjectStatus = "Concluído" | "Em obra" | "Em projeto"

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  location: string
  year: number
  area: string
  typology: string
  status: ProjectStatus
  team: string[]
  summary: string
  description: string[]
  cover: Photo
  gallery: Photo[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "casa-pedra-branca",
    title: "Casa Pedra Branca",
    category: "Residencial",
    location: "Ubatuba, SP",
    year: 2024,
    area: "420 m²",
    typology: "Residência unifamiliar",
    status: "Concluído",
    team: ["Helena Vasconcelos", "Tomás Ribeiro", "Júlia Prado"],
    summary:
      "Uma casa de veraneio que se abre inteiramente para o mar, construída em concreto branco e madeira de reflorestamento.",
    description: [
      "Implantada em um terreno em declive voltado para a enseada, a Casa Pedra Branca organiza o programa em dois volumes deslocados. O primeiro, mais fechado, abriga os quartos e se apoia na encosta; o segundo, quase todo envidraçado, reúne estar, jantar e cozinha em um único plano voltado para o horizonte.",
      "O concreto branco aparente foi escolhido pela resistência à maresia e pela forma como devolve a luz intensa do litoral. Os painéis de madeira, que deslizam diante dos caixilhos, permitem controlar a insolação ao longo do dia e transformam a fachada conforme o uso da casa.",
      "A piscina funciona como um espelho d'água que prolonga a laje do estar até a vegetação de restinga preservada. Nenhuma árvore nativa foi suprimida: o desenho dos volumes contornou cada uma delas.",
    ],
    cover: { id: PHOTOS.whiteHousePool, alt: "Casa branca de linhas retas com grandes panos de vidro e piscina em primeiro plano", tone: "mono" },
    gallery: [
      { id: PHOTOS.poolTerrace, alt: "Terraço com piscina e volume branco ao entardecer", tone: "mono" },
      { id: PHOTOS.openLiving, alt: "Sala de estar integrada com sofá claro e piso de madeira", tone: "earth" },
      { id: PHOTOS.glassInterior, alt: "Estar envidraçado com vista para a vegetação", tone: "mono" },
      { id: PHOTOS.whiteVillaPool, alt: "Fachada branca refletida na piscina", tone: "mono" },
      { id: PHOTOS.stoneBathroom, alt: "Banheiro revestido em pedra clara com iluminação natural", tone: "earth" },
    ],
    featured: true,
  },
  {
    slug: "sede-terrae",
    title: "Sede Terrae",
    category: "Comercial",
    location: "São Paulo, SP",
    year: 2023,
    area: "3.800 m²",
    typology: "Edifício corporativo",
    status: "Concluído",
    team: ["Rafael Monteiro", "Marina Okada", "André Siqueira"],
    summary:
      "Edifício corporativo de seis pavimentos em que a fachada de brises brancos regula a luz e dá identidade à empresa.",
    description: [
      "A nova sede da Terrae Engenharia ocupa um lote de esquina na Barra Funda. O partido foi criar um edifício permeável no térreo, com praça aberta à cidade, e lajes livres nos pavimentos superiores, capazes de se adaptar a diferentes formas de trabalho.",
      "A fachada é composta por lâminas de concreto pré-fabricado dispostas em ritmos distintos conforme a orientação solar. Na face oeste, mais exposta, as lâminas se adensam; na face sul, se afastam para receber a luz difusa. O resultado é uma redução de 38% na carga térmica em relação a um envelope convencional.",
      "No interior, a escada aberta conecta todos os andares e substitui o elevador nos deslocamentos curtos, estimulando encontros entre as equipes.",
    ],
    cover: { id: PHOTOS.whiteBalconies, alt: "Fachada branca com lâminas horizontais vista de baixo contra o céu", tone: "mono" },
    gallery: [
      { id: PHOTOS.whiteGridFacade, alt: "Detalhe de fachada branca modulada", tone: "mono" },
      { id: PHOTOS.loftOffice, alt: "Pavimento de escritórios com pé-direito alto e janelas amplas", tone: "mono" },
      { id: PHOTOS.fadedFacade, alt: "Fachada clara em perspectiva com céu branco", tone: "mono" },
      { id: PHOTOS.towerSky, alt: "Edifício em perspectiva vertical contra o céu", tone: "mono" },
    ],
    featured: true,
  },
  {
    slug: "apartamento-higienopolis",
    title: "Apartamento Higienópolis",
    category: "Interiores",
    location: "São Paulo, SP",
    year: 2024,
    area: "210 m²",
    typology: "Reforma de apartamento",
    status: "Concluído",
    team: ["Júlia Prado", "Helena Vasconcelos"],
    summary:
      "Reforma de um apartamento dos anos 1950 que recupera o piso de taco original e redesenha a planta em torno da luz.",
    description: [
      "O apartamento, em um edifício modernista de 1956, chegou até nós compartimentado por reformas sucessivas. A primeira decisão foi remover as divisórias acrescentadas ao longo das décadas e devolver à planta a fluidez que o projeto original sugeria.",
      "O piso de taco de peroba foi recuperado peça por peça. A marcenaria em freijó, desenhada sob medida, organiza estantes, armários e uma longa bancada que atravessa estar e jantar, funcionando como espinha dorsal do apartamento.",
      "A paleta reduzida — cal, linho, madeira e latão escovado — deixa que a luz da tarde, filtrada pelas copas das árvores da rua, seja a protagonista dos ambientes.",
    ],
    cover: { id: PHOTOS.sandInterior, alt: "Sala em tons de areia com poltronas e luz natural suave", tone: "earth" },
    gallery: [
      { id: PHOTOS.warmLiving, alt: "Estar com sofá de linho e mesa de centro em madeira", tone: "earth" },
      { id: PHOTOS.timberDining, alt: "Mesa de jantar em madeira maciça junto à janela", tone: "earth" },
      { id: PHOTOS.greenDining, alt: "Sala de jantar com cadeiras de madeira e pendente", tone: "earth" },
      { id: PHOTOS.whiteKitchen, alt: "Cozinha clara com ilha central", tone: "earth" },
    ],
    featured: true,
  },
  {
    slug: "pavilhao-serra-do-mar",
    title: "Pavilhão Cultural Serra do Mar",
    category: "Institucional",
    location: "Paraty, RJ",
    year: 2022,
    area: "1.650 m²",
    typology: "Centro cultural",
    status: "Concluído",
    team: ["Helena Vasconcelos", "Rafael Monteiro", "Tomás Ribeiro", "Marina Okada"],
    summary:
      "Pavilhão de exposições e oficinas em que paredes curvas de tijolo cerâmico conduzem o visitante entre a mata e o mar.",
    description: [
      "Encomendado por uma fundação dedicada ao artesanato caiçara, o pavilhão reúne galerias, ateliês e um auditório ao ar livre. O desenho parte de um percurso: o visitante entra pela mata e, aos poucos, as paredes curvas se abrem até revelar a baía.",
      "As alvenarias foram executadas em tijolo cerâmico produzido em uma olaria da região, com mão de obra local treinada durante a obra. A curvatura das paredes garante estabilidade sem necessidade de pilares e cria, nas galerias, uma luz rasante que valoriza as peças expostas.",
      "A cobertura em laje plana recebe vegetação nativa e coleta a água da chuva, que abastece os ateliês e a irrigação do jardim.",
    ],
    cover: { id: PHOTOS.terracottaCurves, alt: "Paredes curvas de tijolo cerâmico em tom terracota contra o céu", tone: "earth" },
    gallery: [
      { id: PHOTOS.whiteSculpture, alt: "Volume branco escultórico com arestas inclinadas", tone: "mono" },
      { id: PHOTOS.stripedFacade, alt: "Fachada com faixas horizontais em preto e branco", tone: "mono" },
      { id: PHOTOS.glassCurtain, alt: "Pano de vidro refletindo o céu", tone: "mono" },
      { id: PHOTOS.glassCorridor, alt: "Corredor envidraçado com luz lateral", tone: "mono" },
    ],
    featured: true,
  },
  {
    slug: "casa-cerrado",
    title: "Casa Cerrado",
    category: "Residencial",
    location: "Brasília, DF",
    year: 2021,
    area: "560 m²",
    typology: "Residência unifamiliar",
    status: "Concluído",
    team: ["Tomás Ribeiro", "André Siqueira"],
    summary:
      "Residência térrea sob uma grande cobertura de madeira, desenhada para o clima seco e a luz rasante do Planalto Central.",
    description: [
      "No Lago Norte, a casa se organiza sob uma única cobertura de madeira laminada colada, com beirais de três metros que sombreiam as varandas durante a seca e protegem as esquadrias nas chuvas de verão.",
      "Os ambientes se distribuem em torno de um pátio interno com espécies do cerrado — ipês, pequizeiros e capim-dourado —, que umidifica o ar e cria ventilação cruzada em todos os cômodos.",
      "As paredes de taipa de pilão, feitas com a terra retirada na escavação das fundações, garantem inércia térmica e dão à casa a cor avermelhada do solo da região.",
    ],
    cover: { id: PHOTOS.houseAmongTrees, alt: "Casa contemporânea com cobertura em madeira entre árvores", tone: "earth" },
    gallery: [
      { id: PHOTOS.timberExterior, alt: "Fachada revestida em madeira com grandes aberturas", tone: "earth" },
      { id: PHOTOS.timberHouse, alt: "Volume de madeira e vidro com jardim frontal", tone: "earth" },
      { id: PHOTOS.livingView, alt: "Sala ampla com vista para a paisagem", tone: "earth" },
    ],
  },
  {
    slug: "coworking-pinheiros",
    title: "Coworking Pinheiros",
    category: "Comercial",
    location: "São Paulo, SP",
    year: 2022,
    area: "1.200 m²",
    typology: "Escritórios compartilhados",
    status: "Concluído",
    team: ["Marina Okada", "Júlia Prado"],
    summary:
      "Conversão de um galpão industrial em espaço de trabalho compartilhado, preservando a estrutura metálica e os sheds originais.",
    description: [
      "O galpão de 1972, antiga oficina gráfica, tinha estrutura em bom estado e uma cobertura em sheds que garantia luz natural uniforme. O projeto preservou ambos e inseriu, no interior, um mezanino independente em estrutura metálica leve.",
      "As áreas de trabalho se distribuem em gradação: dos espaços abertos e ruidosos junto à entrada às salas silenciosas no fundo do lote. Cortinas de feltro e painéis de madeira perfurada controlam a acústica sem fechar os ambientes.",
      "A fachada recebeu um novo caixilho de piso a teto, que expõe o interior para a rua e devolve ao quarteirão a presença do antigo galpão.",
    ],
    cover: { id: PHOTOS.openOffice, alt: "Espaço de trabalho amplo com mesas compartilhadas e iluminação natural", tone: "mono" },
    gallery: [
      { id: PHOTOS.darkOffice, alt: "Estações de trabalho com luminárias pendentes", tone: "mono" },
      { id: PHOTOS.officeLounge, alt: "Área de convivência com sofás e plantas", tone: "mono" },
      { id: PHOTOS.stairLight, alt: "Escada com guarda-corpo leve e luz lateral", tone: "mono" },
    ],
  },
  {
    slug: "biblioteca-tiradentes",
    title: "Biblioteca Pública de Tiradentes",
    category: "Institucional",
    location: "Tiradentes, MG",
    year: 2020,
    area: "980 m²",
    typology: "Biblioteca pública",
    status: "Concluído",
    team: ["Helena Vasconcelos", "André Siqueira"],
    summary:
      "Biblioteca que dialoga com o casario colonial pelo ritmo das aberturas, sem recorrer à imitação de estilos.",
    description: [
      "Inserida no perímetro tombado, a biblioteca precisava respeitar gabarito, alinhamento e proporção das construções vizinhas. Em vez de reproduzir o vocabulário colonial, o projeto interpretou o ritmo das janelas e portas do casario em uma fachada de concreto pigmentado.",
      "No interior, uma sala de leitura em pé-direito duplo recebe luz zenital filtrada por uma cobertura de telhas cerâmicas translúcidas. As estantes, em madeira de demolição, configuram nichos de leitura junto às janelas.",
      "O projeto foi desenvolvido em diálogo com o IPHAN e com a comunidade, em oficinas abertas que definiram o programa e os horários de uso.",
    ],
    cover: { id: PHOTOS.residentialFacade, alt: "Fachada de edifício com aberturas regulares e varandas", tone: "mono" },
    gallery: [
      { id: PHOTOS.darkVolume, alt: "Volume escuro com recortes de luz", tone: "mono" },
      { id: PHOTOS.brickBalconies, alt: "Fachada em tijolo com varandas sobrepostas", tone: "earth" },
      { id: PHOTOS.studyCorner, alt: "Canto de leitura com mesa e luminária", tone: "mono" },
    ],
  },
  {
    slug: "loft-rua-augusta",
    title: "Loft Rua Augusta",
    category: "Interiores",
    location: "São Paulo, SP",
    year: 2023,
    area: "95 m²",
    typology: "Reforma de apartamento",
    status: "Concluído",
    team: ["Júlia Prado", "Marina Okada"],
    summary:
      "Um pequeno loft em que cada centímetro trabalha: marcenaria contínua, cores profundas e luz pontual.",
    description: [
      "Em um edifício dos anos 1970 no Baixo Augusta, o loft de 95 m² foi pensado para um casal que trabalha em casa. O desafio era acomodar escritório, estar, cozinha e quarto sem perder a sensação de amplitude.",
      "A solução foi concentrar todas as funções de apoio em uma parede de marcenaria contínua, em carvalho escurecido, que esconde armários, uma bancada de trabalho dobrável e a lavanderia.",
      "As paredes em tom grafite e a iluminação pontual criam, à noite, uma atmosfera recolhida; durante o dia, a grande janela voltada para o leste devolve ao espaço a claridade.",
    ],
    cover: { id: PHOTOS.darkLiving, alt: "Sala de estar em tons escuros com sofá e iluminação indireta", tone: "mono" },
    gallery: [
      { id: PHOTOS.whiteRoom, alt: "Ambiente claro com móveis de linhas simples", tone: "mono" },
      { id: PHOTOS.kitchenIsland, alt: "Cozinha com ilha e banquetas", tone: "mono" },
      { id: PHOTOS.yellowChair, alt: "Canto de estar com poltrona e quadro na parede", tone: "earth" },
    ],
  },
  {
    slug: "casa-itaipava",
    title: "Casa Itaipava",
    category: "Residencial",
    location: "Petrópolis, RJ",
    year: 2025,
    area: "380 m²",
    typology: "Residência de campo",
    status: "Em obra",
    team: ["Rafael Monteiro", "Tomás Ribeiro"],
    summary:
      "Casa de campo na serra fluminense, com lareira central e varandas que se estendem sobre o vale.",
    description: [
      "A casa se apoia sobre um embasamento de pedra local e se abre em direção ao vale do rio Piabanha. O programa se divide em duas alas — social e íntima — unidas por uma lareira central de dupla face.",
      "Para o clima frio e úmido da serra, o projeto prioriza o aquecimento passivo: grandes aberturas a norte, piso em concreto polido com massa térmica e isolamento em lã de rocha nas coberturas.",
      "A obra está em andamento, com conclusão prevista para o primeiro semestre de 2027.",
    ],
    cover: { id: PHOTOS.modernHouseDusk, alt: "Casa contemporânea iluminada ao entardecer", tone: "earth" },
    gallery: [
      { id: PHOTOS.houseNight, alt: "Fachada com luz interna à noite", tone: "earth" },
      { id: PHOTOS.houseDusk, alt: "Casa térrea com jardim ao entardecer", tone: "earth" },
      { id: PHOTOS.livingRoom, alt: "Sala aconchegante com sofá e mantas", tone: "earth" },
      { id: PHOTOS.quietLiving, alt: "Estar sereno com móveis baixos", tone: "earth" },
    ],
  },
  {
    slug: "edificio-vertente",
    title: "Edifício Vertente",
    category: "Comercial",
    location: "Curitiba, PR",
    year: 2026,
    area: "6.200 m²",
    typology: "Uso misto",
    status: "Em projeto",
    team: ["Rafael Monteiro", "Helena Vasconcelos", "Marina Okada"],
    summary:
      "Edifício de uso misto com térreo comercial aberto e escritórios em lajes escalonadas que recebem jardins.",
    description: [
      "No bairro Batel, o Vertente combina lojas no térreo, escritórios nos pavimentos intermediários e um terraço público na cobertura. As lajes recuam progressivamente, formando terraços ajardinados em cada andar.",
      "A estrutura mista — pilares de concreto e lajes em madeira engenheirada — reduz a pegada de carbono da obra em cerca de 45% em comparação a uma estrutura convencional.",
      "O projeto está em fase de aprovação e deve iniciar as obras no segundo semestre de 2027.",
    ],
    cover: { id: PHOTOS.blueFacade, alt: "Edifício com fachada escura e varandas em perspectiva", tone: "mono" },
    gallery: [
      { id: PHOTOS.goldenGlass, alt: "Fachada de vidro com reflexos dourados", tone: "earth" },
      { id: PHOTOS.apartmentBlock, alt: "Bloco residencial com varandas", tone: "mono" },
      { id: PHOTOS.monoTowers, alt: "Torres em preto e branco vistas de baixo", tone: "mono" },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string): { previous: Project; next: Project } | undefined {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return undefined
  const total = projects.length
  return {
    previous: projects[(index - 1 + total) % total],
    next: projects[(index + 1) % total],
  }
}

export const featuredProjects = projects.filter((project) => project.featured)
