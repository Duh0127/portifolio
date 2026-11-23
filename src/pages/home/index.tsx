import { useReducedMotion } from 'motion/react'

import { Marquee } from '../../components/fx'

import { AmbientField, AmbientGrid, Page } from './styles'
import AboutSection from './sections/about'
import ContactSection from './sections/contact'
import HomeHeroSection from './sections/hero'
import ProjectsSection from './sections/projects/ProjectsSection'
import SoftSkillsSection from './sections/soft-skills'
import StackSection from './sections/stack'

export default function Home() {
  const prefersReducedMotion = useReducedMotion() ?? false
  const currentYear = new Date().getFullYear()

  return (
    <Page>
      <AmbientField />
      <AmbientGrid />

      <HomeHeroSection reducedMotion={prefersReducedMotion} />
      <Marquee
        items={['Node.js', 'NestJS', 'SAP BTP', 'SAP CAP', 'SAPUI5', 'OData', 'React', 'Next.js', 'TypeScript', 'SQL', 'Docker', 'GitHub Actions', 'Cloud Foundry', 'LLMs']}
      />
      <AboutSection reducedMotion={prefersReducedMotion} />
      <ProjectsSection reducedMotion={prefersReducedMotion} />
      <StackSection reducedMotion={prefersReducedMotion} />
      <SoftSkillsSection reducedMotion={prefersReducedMotion} />
      <ContactSection
        currentYear={currentYear}
        reducedMotion={prefersReducedMotion}
      />
    </Page>
  )
}
