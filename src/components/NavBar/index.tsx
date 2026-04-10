import { useReducedMotion } from 'motion/react'
import { useLocation } from 'react-router-dom'

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
  { label: 'Perfil', href: '/#sobre' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Stack', href: '/#stacks' },
  { label: 'Soft Skills', href: '/#soft-skills' },
  { label: 'Contato', href: '/#contato' },
]

const NavBar = () => {
  const prefersReducedMotion = useReducedMotion() ?? false
  const location = useLocation()
  const currentSectionHref = location.hash ? `/${location.hash}` : ''

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
          <Brand to="/" aria-label="Voltar para o início">
            <BrandName>Eduardo Okubo</BrandName>
            <BrandMeta>Full Stack / backend-first</BrandMeta>
          </Brand>

          <NavLinks aria-label="Navegação principal">
            {navigationItems.map((item) => (
              <NavAnchor
                key={item.label}
                href={item.href}
                $active={location.pathname === '/' && item.href === currentSectionHref}
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
