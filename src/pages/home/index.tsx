import { useReducedMotion } from 'motion/react'

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
