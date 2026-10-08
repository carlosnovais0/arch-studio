import { AwardsClients } from "@/components/home/AwardsClients"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { Hero } from "@/components/home/Hero"
import { Philosophy } from "@/components/home/Philosophy"
import { ContactCta } from "@/components/shared/ContactCta"
import { site } from "@/data/site"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"

export default function HomePage() {
  useDocumentMeta(
    site.name,
    "ARCH STUDIO é um estúdio de arquitetura e interiores em São Paulo. Projetos residenciais, comerciais e institucionais guiados pela luz, pela matéria e pelo tempo."
  )

  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Philosophy />
      <AwardsClients />
      <ContactCta />
    </>
  )
}
