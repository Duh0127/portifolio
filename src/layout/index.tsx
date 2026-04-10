import { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import NavBar from '../components/NavBar'
import {
  SectionNavigationContext,
  trackedSectionIds,
  type ActiveSectionId,
} from './sectionNavigation'
import { Content, LayoutContainer } from './styles'

const SCROLL_OFFSET = 132

const normalizeHash = (hash: string): ActiveSectionId => {
  const sectionId = hash.replace('#', '')

  if (!sectionId || sectionId === 'inicio') {
    return ''
  }

  return trackedSectionIds.includes(sectionId as (typeof trackedSectionIds)[number])
    ? (sectionId as ActiveSectionId)
    : ''
}

const updateUrlHash = (activeSection: ActiveSectionId) => {
  const baseUrl = `${window.location.pathname}${window.location.search}`
  const nextUrl = activeSection ? `${baseUrl}#${activeSection}` : baseUrl

  if (`${baseUrl}${window.location.hash}` === nextUrl) {
    return
  }

  window.history.replaceState(window.history.state, '', nextUrl)
}

const getActiveSectionFromScroll = (): ActiveSectionId => {
  const probePosition = window.scrollY + SCROLL_OFFSET
  let currentSection: ActiveSectionId = ''

  for (const sectionId of trackedSectionIds) {
    const sectionElement = document.getElementById(sectionId)

    if (!sectionElement) {
      continue
    }

    const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY

    if (sectionTop <= probePosition) {
      currentSection = sectionId
      continue
    }

    break
  }

  return currentSection
}

const scrollToHashTarget = (hash: string) => {
  const targetId = hash.replace('#', '')

  if (!targetId) {
    return
  }

  const targetElement = document.getElementById(targetId)

  if (!targetElement) {
    return
  }

  window.requestAnimationFrame(() => {
    targetElement.scrollIntoView()
  })
}

const Layout = () => {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState<ActiveSectionId>(() =>
    normalizeHash(window.location.hash),
  )

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    if (window.location.hash) {
      setActiveSection(normalizeHash(window.location.hash))
      scrollToHashTarget(window.location.hash)
    }

    let isFrameScheduled = false

    const syncActiveSection = () => {
      isFrameScheduled = false

      const nextActiveSection = getActiveSectionFromScroll()

      setActiveSection((currentActiveSection) =>
        currentActiveSection === nextActiveSection
          ? currentActiveSection
          : nextActiveSection,
      )

      updateUrlHash(nextActiveSection)
    }

    const requestSectionSync = () => {
      if (isFrameScheduled) {
        return
      }

      isFrameScheduled = true
      window.requestAnimationFrame(syncActiveSection)
    }

    const handleHashChange = () => {
      setActiveSection(normalizeHash(window.location.hash))
    }

    if (!window.location.hash) {
      requestSectionSync()
    }

    window.addEventListener('scroll', requestSectionSync, { passive: true })
    window.addEventListener('resize', requestSectionSync)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', requestSectionSync)
      window.removeEventListener('resize', requestSectionSync)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [location.key, location.pathname])

  const contextValue = useMemo(
    () => ({
      activeSection,
    }),
    [activeSection],
  )

  return (
    <SectionNavigationContext.Provider value={contextValue}>
      <LayoutContainer>
        <NavBar />
        <Content>
          <Outlet />
        </Content>
      </LayoutContainer>
    </SectionNavigationContext.Provider>
  )
}

export default Layout
