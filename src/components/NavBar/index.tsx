import { useReducedMotion } from 'motion/react'

import { useSectionNavigation } from '../../layout/sectionNavigation'
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
} from './styles'

const navigationItems = [
  { label: 'Perfil', href: '/#sobre', sectionId: 'sobre' },
  { label: 'Projetos', href: '/#projetos', sectionId: 'projetos' },
  { label: 'Stack', href: '/#stacks', sectionId: 'stacks' },
  { label: 'Soft Skills', href: '/#soft-skills', sectionId: 'soft-skills' },
  { label: 'Contato', href: '/#contato', sectionId: 'contato' },
] as const

const NavBar = () => {
  const prefersReducedMotion = useReducedMotion() ?? false
  const { activeSection } = useSectionNavigation()

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
          <Brand to="/#inicio" aria-label="Voltar para o início">
            <BrandName>Eduardo Okubo</BrandName>
            <BrandMeta>Full Stack / backend-first</BrandMeta>
          </Brand>

          <NavLinks aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <NavAnchor
                key={item.label}
                href={item.href}
                $active={item.sectionId === activeSection}
              >
                {item.label}
              </NavAnchor>
            ))}
          </NavLinks>

          <ContactButton
            href="/#contato"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Conversar
          </ContactButton>
        </HeaderContent>
      </HeaderShell>
    </HeaderContainer>
  )
}

export default NavBar
