import type { Photo } from "@/lib/images"
import { PHOTOS } from "./photos"

export interface TeamMember {
  name: string
  role: string
  photo: Photo
}

export const team: TeamMember[] = [
  {
    name: "Helena Vasconcelos",
    role: "Sócia fundadora",
    photo: { id: PHOTOS.portraitHelena, alt: "Retrato de Helena Vasconcelos", tone: "mono" },
  },
  {
    name: "Rafael Monteiro",
    role: "Sócio, diretor de projetos",
    photo: { id: PHOTOS.portraitRafael, alt: "Retrato de Rafael Monteiro", tone: "mono" },
  },
  {
    name: "Marina Okada",
    role: "Arquiteta coordenadora",
    photo: { id: PHOTOS.portraitMarina, alt: "Retrato de Marina Okada", tone: "mono" },
  },
  {
    name: "Tomás Ribeiro",
    role: "Arquiteto sênior",
    photo: { id: PHOTOS.portraitTomas, alt: "Retrato de Tomás Ribeiro", tone: "mono" },
  },
  {
    name: "Júlia Prado",
    role: "Coordenadora de interiores",
    photo: { id: PHOTOS.portraitJulia, alt: "Retrato de Júlia Prado", tone: "mono" },
  },
  {
    name: "André Siqueira",
    role: "Arquiteto, gestão de obras",
    photo: { id: PHOTOS.portraitAndre, alt: "Retrato de André Siqueira", tone: "mono" },
  },
]
