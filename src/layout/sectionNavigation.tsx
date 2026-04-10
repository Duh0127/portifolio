import { createContext, useContext } from 'react'

export const trackedSectionIds = [
  'sobre',
  'projetos',
  'stacks',
  'soft-skills',
  'contato',
] as const

export type TrackedSectionId = (typeof trackedSectionIds)[number]
export type ActiveSectionId = TrackedSectionId | ''

type SectionNavigationContextValue = {
  activeSection: ActiveSectionId
}

export const SectionNavigationContext =
  createContext<SectionNavigationContextValue>({
    activeSection: '',
  })

export const useSectionNavigation = () => useContext(SectionNavigationContext)
