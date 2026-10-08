import type { Photo } from "@/lib/images"
import { PHOTOS } from "./photos"

export type PostCategory = "Ensaio" | "Processo" | "Sustentabilidade" | "Guia"

export type PostBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "image"; photo: Photo; caption?: string; wide?: boolean }

export interface Post {
  slug: string
  title: string
  category: PostCategory
  date: string
  author: string
  excerpt: string
  cover: Photo
  body: PostBlock[]
  featured?: boolean
}

export const posts: Post[] = [
  {
    slug: "luz-natural-como-materia-de-projeto",
    title: "Luz natural como matéria de projeto",
    category: "Ensaio",
    date: "2026-09-18",
    author: "Helena Vasconcelos",
    excerpt:
      "Antes do concreto, da madeira ou do vidro, é a luz que define um espaço. Por que começamos cada projeto estudando o percurso do sol.",
    cover: { id: PHOTOS.whiteRoom, alt: "Ambiente branco banhado por luz natural lateral", tone: "mono" },
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Em todo projeto do estúdio, a primeira visita ao terreno acontece duas vezes: uma pela manhã e outra no fim da tarde. Antes de qualquer croqui, queremos entender de onde vem a luz, como ela atravessa as árvores, em que momento toca o chão. É dessa observação que nasce a implantação, a posição das aberturas e, muitas vezes, a própria forma do edifício.",
      },
      {
        type: "paragraph",
        text: "A luz é o único material que não compramos, não transportamos e não descartamos. Ainda assim, é o que mais transforma a experiência de um espaço. Uma sala de proporções corretas pode parecer opressiva se a luz chega de forma dura; um corredor estreito pode se tornar o lugar mais bonito da casa se receber um rasgo de claridade no ponto certo.",
      },
      { type: "heading", text: "Desenhar com a sombra" },
      {
        type: "paragraph",
        text: "No clima brasileiro, pensar a luz é também pensar a sombra. Beirais profundos, brises, muxarabis e varandas não são elementos decorativos: são a resposta construída a um sol que, na maior parte do país, precisa ser filtrado e não simplesmente recebido. A arquitetura moderna brasileira entendeu isso cedo, e é dessa tradição que partimos.",
      },
      {
        type: "quote",
        text: "A luz é o único material que não compramos, não transportamos e não descartamos — e é o que mais transforma um espaço.",
      },
      {
        type: "image",
        photo: { id: PHOTOS.stairLight, alt: "Escada iluminada por luz lateral", tone: "mono" },
        caption: "Luz lateral rasante sobre uma escada: a textura dos materiais aparece com a sombra.",
        wide: true,
      },
      {
        type: "paragraph",
        text: "Trabalhamos com maquetes físicas e simulações digitais em paralelo. As maquetes, levadas ao sol do próprio terreno, mostram nuances que o computador ainda não captura: o reflexo de um piso claro, a cor que a luz assume ao passar por uma copa, a vibração de uma parede texturizada.",
      },
      { type: "heading", text: "Luz que muda ao longo do dia" },
      {
        type: "paragraph",
        text: "Gostamos de espaços que mudam ao longo do dia. Uma casa que, pela manhã, tem a cozinha banhada de sol e, à tarde, recolhe a claridade para a varanda. Essa variação dá aos moradores uma relação mais atenta com o tempo, e é talvez a forma mais simples de fazer a arquitetura participar da vida cotidiana.",
      },
    ],
  },
  {
    slug: "retrofit-reabilitar-e-construir-melhor",
    title: "Retrofit: por que reabilitar é construir melhor",
    category: "Sustentabilidade",
    date: "2026-08-27",
    author: "Rafael Monteiro",
    excerpt:
      "O edifício mais sustentável costuma ser aquele que já existe. Como o retrofit reduz emissões, preserva memória e devolve vida aos centros urbanos.",
    cover: { id: PHOTOS.brickBalconies, alt: "Fachada de edifício antigo em tijolo com varandas", tone: "earth" },
    body: [
      {
        type: "paragraph",
        text: "Boa parte das emissões de carbono de um edifício acontece antes mesmo de ele ser ocupado: na extração de matérias-primas, na fabricação do cimento e do aço, no transporte e na própria obra. Quando demolimos uma estrutura em bom estado para construir outra no lugar, desperdiçamos todo esse carbono já investido.",
      },
      {
        type: "paragraph",
        text: "O retrofit parte do caminho inverso. Em vez de começar do zero, avalia o que o edifício existente oferece — estrutura, implantação, memória — e intervém apenas onde é necessário para adequá-lo a novos usos, normas e padrões de desempenho.",
      },
      { type: "heading", text: "O que avaliamos antes de decidir" },
      {
        type: "paragraph",
        text: "Todo retrofit começa por um diagnóstico técnico: laudo estrutural, levantamento das instalações, análise de patologias e estudo do potencial construtivo. Com essas informações, conseguimos dizer com segurança se a reabilitação é viável e quanto ela custa em comparação a uma construção nova.",
      },
      {
        type: "quote",
        text: "O edifício mais sustentável costuma ser aquele que já existe.",
        cite: "Carl Elefante, arquiteto e ex-presidente do AIA",
      },
      {
        type: "paragraph",
        text: "Nos centros das grandes cidades brasileiras, há milhares de edifícios subutilizados com estrutura sólida, infraestrutura urbana completa e acesso a transporte público. Reabilitá-los para habitação, cultura ou trabalho é uma das formas mais eficazes de tornar as cidades mais compactas e vivas.",
      },
      {
        type: "image",
        photo: { id: PHOTOS.timberStructure, alt: "Estrutura de madeira aparente em edifício reabilitado", tone: "earth" },
        caption: "Estruturas existentes, quando bem avaliadas, se tornam parte da linguagem do novo projeto.",
      },
      { type: "heading", text: "Memória como valor de projeto" },
      {
        type: "paragraph",
        text: "Além dos ganhos ambientais, há um valor que não aparece nas planilhas: a memória. Um galpão industrial convertido em escritório carrega a história do bairro; uma fachada preservada mantém a escala da rua. Para nós, o desafio do retrofit é tornar essa camada de tempo visível, sem transformá-la em cenário.",
      },
    ],
  },
  {
    slug: "do-croqui-a-obra",
    title: "Do croqui à obra: como funciona nosso processo",
    category: "Processo",
    date: "2026-07-30",
    author: "Tomás Ribeiro",
    excerpt:
      "Um projeto de arquitetura leva meses, às vezes anos. Explicamos cada etapa, do primeiro encontro à entrega das chaves.",
    cover: { id: PHOTOS.drawings, alt: "Mãos desenhando sobre uma planta arquitetônica", tone: "mono" },
    body: [
      {
        type: "paragraph",
        text: "Uma das perguntas mais frequentes que recebemos é: quanto tempo leva? A resposta honesta é que depende — da escala, da complexidade, das aprovações necessárias. Mas o caminho é sempre parecido, e entendê-lo ajuda a planejar e a tomar decisões com mais tranquilidade.",
      },
      { type: "heading", text: "Escuta e estudo preliminar" },
      {
        type: "paragraph",
        text: "Tudo começa com conversas. Queremos entender como o cliente vive ou trabalha, o que valoriza, o que o incomoda nos espaços onde está hoje. Em paralelo, visitamos o terreno e levantamos a legislação aplicável. Dessa etapa sai o programa de necessidades e um estudo preliminar com as primeiras hipóteses de implantação e volumetria.",
      },
      {
        type: "image",
        photo: { id: PHOTOS.studyCorner, alt: "Mesa de trabalho com luminária e desenhos", tone: "mono" },
        caption: "Os primeiros estudos são sempre feitos à mão.",
      },
      { type: "heading", text: "Anteprojeto e projeto executivo" },
      {
        type: "paragraph",
        text: "Aprovado o estudo, desenvolvemos o anteprojeto, que define com precisão plantas, cortes, fachadas e materiais. É nessa fase que o projeto é submetido à prefeitura e que começamos a coordenação com os engenheiros de estrutura e instalações.",
      },
      {
        type: "paragraph",
        text: "O projeto executivo é o conjunto completo de desenhos e especificações que permite construir. Inclui detalhamento de marcenaria, esquadrias, revestimentos e luminotécnica. Quanto mais completo, menos improviso na obra — e menos surpresas no orçamento.",
      },
      {
        type: "quote",
        text: "Quanto mais completo o projeto executivo, menos improviso na obra e menos surpresas no orçamento.",
      },
      { type: "heading", text: "Acompanhamento de obra" },
      {
        type: "paragraph",
        text: "Durante a construção, visitamos a obra semanalmente, respondemos às dúvidas da construtora e verificamos se o que está sendo executado corresponde ao projeto. É a etapa em que o desenho encontra a matéria, e em que pequenos ajustes fazem grande diferença no resultado final.",
      },
    ],
  },
  {
    slug: "arquitetura-bioclimatica-no-clima-tropical",
    title: "Arquitetura bioclimática no clima tropical",
    category: "Sustentabilidade",
    date: "2026-06-12",
    author: "Marina Okada",
    excerpt:
      "Ventilação cruzada, sombreamento e inércia térmica: estratégias simples que reduzem a dependência do ar-condicionado.",
    cover: { id: PHOTOS.minimalWhiteHouse, alt: "Casa branca de volumes simples sob céu claro", tone: "mono" },
    body: [
      {
        type: "paragraph",
        text: "Durante décadas, a resposta padrão ao calor foi instalar ar-condicionado. O resultado são edifícios que funcionam mal sem energia e consomem muito com ela. A arquitetura bioclimática propõe outro ponto de partida: projetar de modo que o próprio edifício responda ao clima.",
      },
      { type: "heading", text: "Ventilação cruzada" },
      {
        type: "paragraph",
        text: "Aberturas em fachadas opostas, posicionadas de acordo com os ventos predominantes, permitem renovar o ar e retirar o calor acumulado. Em casas, isso significa evitar cômodos com uma única janela; em edifícios maiores, criar átrios e poços que funcionem como chaminés.",
      },
      {
        type: "image",
        photo: { id: PHOTOS.glassInterior, alt: "Ambiente com grandes aberturas para o jardim", tone: "mono" },
        caption: "Aberturas generosas e sombreadas permitem ventilação constante.",
        wide: true,
      },
      { type: "heading", text: "Sombreamento e inércia" },
      {
        type: "paragraph",
        text: "Proteger as fachadas do sol direto é mais eficiente do que resfriar o ar depois. Beirais, brises e vegetação fazem esse trabalho. Já materiais de alta inércia térmica, como a taipa, o concreto e a alvenaria maciça, absorvem o calor durante o dia e o devolvem lentamente à noite, suavizando as variações de temperatura.",
      },
      {
        type: "quote",
        text: "Proteger a fachada do sol é sempre mais eficiente do que resfriar o ar depois.",
      },
      {
        type: "paragraph",
        text: "Nenhuma dessas estratégias é nova. Estão presentes nas casas bandeiristas, nas varandas do Nordeste e na arquitetura moderna dos anos 1950. O que mudou foi a nossa capacidade de medir e simular seus efeitos — e, com isso, combiná-las de forma mais precisa.",
      },
    ],
  },
  {
    slug: "antes-de-contratar-um-projeto-de-interiores",
    title: "O que considerar antes de contratar um projeto de interiores",
    category: "Guia",
    date: "2026-05-08",
    author: "Júlia Prado",
    excerpt:
      "Escopo, prazos, orçamento e expectativas: um guia direto para quem vai reformar ou mobiliar um apartamento.",
    cover: { id: PHOTOS.whiteInterior, alt: "Sala clara com sofá e mesa de centro minimalistas", tone: "earth" },
    body: [
      {
        type: "paragraph",
        text: "Contratar um projeto de interiores é uma decisão que envolve tempo, dinheiro e, sobretudo, confiança. Reunimos aqui as questões que costumamos discutir nas primeiras conversas com clientes — e que ajudam a evitar frustrações ao longo do caminho.",
      },
      { type: "heading", text: "Defina o escopo" },
      {
        type: "paragraph",
        text: "Você quer apenas mobiliar e decorar, ou haverá intervenções em paredes, pisos e instalações? A diferença muda completamente o prazo, o orçamento e a necessidade de aprovações no condomínio. Ser claro sobre isso desde o início permite uma proposta mais precisa.",
      },
      { type: "heading", text: "Conheça o seu orçamento" },
      {
        type: "paragraph",
        text: "É comum que o orçamento seja tratado como tabu nas primeiras reuniões. Mas conhecê-lo é o que nos permite fazer boas escolhas: onde vale investir em uma peça marcante, onde uma solução simples resolve tão bem quanto a mais cara.",
      },
      {
        type: "quote",
        text: "Um bom projeto de interiores não é o mais caro, mas aquele em que cada escolha tem uma razão.",
      },
      {
        type: "image",
        photo: { id: PHOTOS.warmLiving, alt: "Sala de estar com materiais naturais e luz suave", tone: "earth" },
        caption: "Materiais naturais e paleta contida: escolhas que atravessam o tempo.",
      },
      { type: "heading", text: "Pense no longo prazo" },
      {
        type: "paragraph",
        text: "Tendências passam rápido. Preferimos materiais que envelhecem bem — madeira maciça, pedra, linho, metais escovados — e um desenho que acomode mudanças na vida dos moradores. Um bom projeto de interiores deve continuar fazendo sentido daqui a dez anos.",
      },
    ],
  },
  {
    slug: "concreto-aparente-e-honestidade-material",
    title: "Concreto aparente e honestidade material",
    category: "Ensaio",
    date: "2026-03-21",
    author: "André Siqueira",
    excerpt:
      "Da escola paulista aos dias de hoje, o concreto aparente segue como expressão de uma arquitetura que não esconde como é feita.",
    cover: { id: PHOTOS.monoTowers, alt: "Edifícios de concreto vistos de baixo em preto e branco", tone: "mono" },
    body: [
      {
        type: "paragraph",
        text: "Há algo de radical em deixar uma estrutura à mostra. O concreto aparente expõe as marcas das fôrmas, as juntas de concretagem, as pequenas imperfeições do processo. Em vez de esconder como o edifício foi construído, ele faz disso a sua expressão.",
      },
      { type: "heading", text: "Uma tradição brasileira" },
      {
        type: "paragraph",
        text: "A chamada escola paulista transformou o concreto aparente em linguagem. Grandes vãos, empenas cegas e coberturas que abrigam espaços generosos sob uma única laje marcaram a arquitetura brasileira da segunda metade do século XX — e continuam a influenciar gerações de arquitetos.",
      },
      {
        type: "quote",
        text: "Em vez de esconder como o edifício foi construído, o concreto aparente faz disso a sua expressão.",
      },
      {
        type: "image",
        photo: { id: PHOTOS.stripedFacade, alt: "Fachada com faixas horizontais de concreto", tone: "mono" },
        caption: "O ritmo das lajes e das fôrmas como desenho de fachada.",
        wide: true,
      },
      { type: "heading", text: "Desafios contemporâneos" },
      {
        type: "paragraph",
        text: "Hoje, o concreto enfrenta um questionamento legítimo: sua produção é responsável por uma parcela significativa das emissões globais de carbono. Por isso, usamos o material com critério — onde ele é estruturalmente necessário e onde sua durabilidade compensa o impacto inicial — e investigamos cimentos com adições, agregados reciclados e estruturas mistas com madeira.",
      },
      {
        type: "paragraph",
        text: "A honestidade material, afinal, não é um estilo. É uma atitude: escolher cada material pelo que ele faz bem e deixá-lo aparecer como é.",
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

/** Posts relacionados: primeiro da mesma categoria, depois os mais recentes. */
export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const others = posts.filter((p) => p.slug !== post.slug)
  const sameCategory = others.filter((p) => p.category === post.category)
  const rest = others.filter((p) => p.category !== post.category)
  return [...sameCategory, ...rest].slice(0, limit)
}

export function postText(post: Post): string[] {
  return post.body.flatMap((block) => (block.type === "paragraph" || block.type === "heading" ? [block.text] : []))
}
