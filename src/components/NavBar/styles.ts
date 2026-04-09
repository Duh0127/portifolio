import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  padding: 1rem 0 0;
`

export const HeaderShell = styled(motion.div)`
  width: min(1120px, calc(100% - 1.5rem));
  margin: 0 auto;
  padding: 0.85rem 1.1rem;
  border: 1px solid rgba(124, 151, 205, 0.16);
  border-radius: 22px;
  background: rgba(7, 10, 17, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow:
    0 16px 44px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
`

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    justify-items: stretch;
  }
`

export const Brand = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  gap: 0.1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const BrandName = styled.span`
  font-size: 0.96rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`

export const BrandMeta = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const NavLinks = styled.nav`
  display: inline-flex;
  align-items: center;
  justify-self: center;
  gap: 0.15rem;
  min-width: 0;

  @media (max-width: 920px) {
    justify-self: stretch;
    overflow-x: auto;
    padding-bottom: 0.1rem;
  }
`

export const NavAnchor = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0.7rem 0.9rem;
  border-radius: 999px;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.primary : theme.colors.text.secondary};
  font-size: 0.92rem;
  font-weight: 600;
  white-space: nowrap;
  background: ${({ $active }) =>
    $active ? 'rgba(255, 255, 255, 0.05)' : 'transparent'};

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.035);
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const ContactButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  min-height: 42px;
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.92rem;
  font-weight: 700;

  @media (max-width: 920px) {
    justify-self: start;
  }
`
