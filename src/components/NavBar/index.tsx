import { useReducedMotion } from 'motion/react'

import { useT } from '../../i18n'
import { useSectionNavigation } from '../../layout/sectionNavigation'
import { LanguageSwitcher, PaletteButton } from '../fx'
import {
  Brand,
  BrandMeta,
  BrandName,
  ContactButton,
  HeaderContainer,
  HeaderContent,
  HeaderShell,
  NavAnchor,
  NavLinks,
  NavTools,
} from './styles'

const navigationItems = [
  { href: '/#sobre', sectionId: 'sobre' },
  { href: '/#projetos', sectionId: 'projetos' },
  { href: '/#stacks', sectionId: 'stacks' },
  { href: '/#soft-skills', sectionId: 'soft-skills' },
  { href: '/#contato', sectionId: 'contato' },
] as const

const NavBar = () => {
  const prefersReducedMotion = useReducedMotion() ?? false
  const { activeSection } = useSectionNavigation()
  const t = useT().nav

  return (
    <HeaderContainer>
      <HeaderShell
        {...(!prefersReducedMotion && {
          initial: { opacity: 0, y: -14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        })}
      >
        <HeaderContent>
          <Brand to="/#inicio" aria-label={t.home}>
            <BrandName>Eduardo Okubo</BrandName>
            <BrandMeta>{t.brandMeta}</BrandMeta>
          </Brand>

          <NavLinks aria-label={t.main}>
            {navigationItems.map((item) => (
              <NavAnchor
                key={item.sectionId}
                href={item.href}
                $active={item.sectionId === activeSection}
              >
                {t.items[item.sectionId]}
              </NavAnchor>
            ))}
          </NavLinks>

          <NavTools>
          <PaletteButton />
          <LanguageSwitcher />
          <ContactButton
            href="/#contato"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.cta}
          </ContactButton>
          </NavTools>
        </HeaderContent>
      </HeaderShell>
    </HeaderContainer>
  )
}

export default NavBar
