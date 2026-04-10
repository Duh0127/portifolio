import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  padding: 0.85rem 0 0;
`

export const HeaderShell = styled(motion.div)`
  width: min(1120px, calc(100% - 1.5rem));
  margin: 0 auto;
  padding: 0.88rem 1.12rem;
  border: 1px solid rgba(143, 171, 223, 0.14);
  border-radius: 24px;
  background: rgba(6, 10, 17, 0.82);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
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
  gap: 0.22rem;
  min-width: 0;

  @media (max-width: 920px) {
    justify-self: stretch;
    overflow-x: auto;
    padding-bottom: 0.15rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const NavAnchor = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  border: 1px solid
    ${({ $active }) =>
      $active ? 'rgba(148, 176, 233, 0.18)' : 'transparent'};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.primary : theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  background: ${({ $active }) =>
    $active
      ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)'
      : 'transparent'};
  box-shadow: ${({ $active }) =>
    $active ? '0 10px 24px rgba(72, 103, 172, 0.14)' : 'none'};

  &:hover,
  &:focus-visible {
    background: rgba(255, 255, 255, 0.045);
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const ContactButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  min-height: 44px;
  padding: 0.82rem 1.02rem;
  border: 1px solid rgba(148, 176, 233, 0.16);
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: 0 12px 24px rgba(56, 79, 130, 0.12);

  @media (max-width: 920px) {
    justify-self: start;
  }
`
