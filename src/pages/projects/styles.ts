import { motion } from 'motion/react'
import styled, { css } from 'styled-components'

const panelSurface = css`
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background:
    linear-gradient(
      180deg,
      rgba(12, 16, 25, 0.9) 0%,
      rgba(8, 11, 18, 0.9) 100%
    );
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
`

const actionBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  font-weight: 700;
`

export const Page = styled.div`
  position: relative;
  overflow: clip;
  padding-bottom: 3rem;
  margin-top: -95px;
`

export const AmbientField = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at 48% 6%,
      rgba(99, 122, 170, 0.08) 0%,
      transparent 26%
    ),
    radial-gradient(
      circle at 16% 34%,
      rgba(67, 83, 121, 0.06) 0%,
      transparent 18%
    ),
    radial-gradient(
      circle at 88% 30%,
      rgba(74, 95, 143, 0.05) 0%,
      transparent 19%
    );
  pointer-events: none;
`

export const AmbientGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 96px 96px;
  mask-image: linear-gradient(180deg, black 0%, transparent 84%);
  opacity: 0.14;
  pointer-events: none;
`

export const HeroSection = styled.section`
  padding: 10rem 6.25rem 4.75rem 6.25rem;

  @media (max-width: 720px) {
    padding-top: 7rem;
  }
`

export const HeroGrid = styled.div`
  width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.92fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export const HeroCopy = styled(motion.div)`
  position: relative;
  z-index: 1;
  padding-top: 1.5rem;
`

export const HeroEyebrow = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const HeroTitle = styled.h1`
  max-width: 12ch;
  margin-top: 1.1rem;
  font-size: clamp(2.9rem, 7vw, 5.1rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  text-wrap: balance;
`

export const HeroTitleAccent = styled.span`
  display: block;
  margin-top: 0.55rem;
  color: ${({ theme }) => theme.colors.brand.primary};
`

export const HeroLead = styled.p`
  max-width: 59ch;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: clamp(1.01rem, 2vw, 1.1rem);
  line-height: 1.84;
`

export const HeroBody = styled.p`
  max-width: 57ch;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.98rem;
  line-height: 1.82;
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
`

export const PrimaryAction = styled(motion.a)`
  ${actionBase}
  background: ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  box-shadow: 0 12px 36px rgba(9, 12, 18, 0.24);
`

export const SecondaryAction = styled(motion.a)`
  ${actionBase}
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: rgba(255, 255, 255, 0.025);
  color: ${({ theme }) => theme.colors.text.primary};
`

export const HeroAside = styled(motion.aside)`
  display: grid;
  gap: 1rem;

  @media (max-width: 980px) {
    max-width: 40rem;
  }
`

export const OverviewCard = styled(motion.article)`
  ${panelSurface}
  border-radius: 28px;
  padding: 1.5rem;
`

export const OverviewTitle = styled.h2`
  max-width: 16ch;
  margin-top: 0.95rem;
  font-size: clamp(1.7rem, 3vw, 2.25rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
`

export const OverviewText = styled.p`
  max-width: 46ch;
  margin-top: 0.95rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.96rem;
  line-height: 1.82;
`

export const OverviewList = styled.div`
  display: grid;
`

export const OverviewItem = styled(motion.article)`
  display: grid;
  gap: 0.45rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(131, 154, 201, 0.1);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`

export const OverviewItemLabel = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const OverviewItemValue = styled.h3`
  font-size: 1rem;
  line-height: 1.35;
`

export const OverviewItemText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.94rem;
  line-height: 1.72;
`

export const Section = styled.section`
  padding: 0 0 6.25rem;
`

export const SectionInner = styled.div`
  width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
`

export const SectionHeading = styled(motion.div)`
  max-width: 43rem;
  margin-bottom: 2rem;
`

export const SectionEyebrow = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

export const SectionTitle = styled.h2`
  margin-top: 0.95rem;
  font-size: clamp(2rem, 4.7vw, 3.4rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  text-wrap: balance;
`

export const SectionDescription = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.98rem;
  line-height: 1.82;
`

export const ProjectSurface = styled.div`
  display: grid;
  gap: 1.5rem;
`

export const ProjectCard = styled(motion.article)<{ $reverse?: boolean }>`
  ${panelSurface}
  position: relative;
  display: grid;
  grid-template-columns: minmax(250px, 0.34fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 3vw, 2.3rem);
  border-radius: 32px;
  padding: clamp(1.2rem, 2.6vw, 1.8rem);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(131, 154, 201, 0.18) 0%,
      rgba(131, 154, 201, 0.04) 46%,
      rgba(131, 154, 201, 0.14) 100%
    );
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    pointer-events: none;
  }

  ${({ $reverse }) =>
    $reverse &&
    css`
      grid-template-columns: minmax(0, 1fr) minmax(250px, 0.34fr);
    `}

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectRail = styled.div<{ $reverse?: boolean }>`
  display: grid;
  align-content: start;
  gap: 1rem;
  padding: 0.35rem 0;
  border-right: 1px solid rgba(131, 154, 201, 0.1);
  padding-right: clamp(1.3rem, 2vw, 1.8rem);

  ${({ $reverse }) =>
    $reverse &&
    css`
      order: 2;
      border-right: none;
      border-left: 1px solid rgba(131, 154, 201, 0.1);
      padding-right: 0;
      padding-left: clamp(1.3rem, 2vw, 1.8rem);
    `}

  @media (max-width: 980px) {
    order: 1;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid rgba(131, 154, 201, 0.1);
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 1.25rem;
  }
`

export const ProjectRailMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

export const ProjectTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(131, 154, 201, 0.15);
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const ProjectOfficialText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.8;

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 700;
  }
`

export const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 42px;
  padding: 0.72rem 0.95rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.9rem;
  font-weight: 700;
`

export const ProjectMain = styled.div<{ $reverse?: boolean }>`
  display: grid;
  gap: 1.5rem;
  padding-top: 0.15rem;

  ${({ $reverse }) =>
    $reverse &&
    css`
      order: 1;
    `}
`

export const ProjectName = styled.h3`
  font-size: clamp(1.9rem, 4vw, 3rem);
  line-height: 1.02;
  letter-spacing: -0.05em;
`

export const ProjectSummary = styled.p`
  max-width: 58ch;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.86;
`

export const ProjectHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectColumn = styled.div`
  display: grid;
  gap: 0.7rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(131, 154, 201, 0.1);
`

export const ProjectColumnLabel = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const ProjectBulletList = styled.ul`
  display: grid;
  gap: 0.75rem;
  padding-left: 1.1rem;
`

export const ProjectBullet = styled.li`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.97rem;
  line-height: 1.76;

  &::marker {
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`

export const BadgeGroup = styled.section`
  display: grid;
  gap: 0.8rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(131, 154, 201, 0.1);
`

export const BadgeGroupLabel = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(131, 154, 201, 0.14);
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.84rem;
  font-weight: 600;
`

export const ClosingCard = styled(motion.section)`
  ${panelSurface}
  border-radius: 30px;
  padding: clamp(1.5rem, 3vw, 2rem);
`

export const ClosingGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.5rem;
  align-items: end;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export const ClosingTitle = styled.h2`
  max-width: 20ch;
  margin-top: 0.95rem;
  font-size: clamp(2rem, 4.8vw, 3.4rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  text-wrap: balance;
`

export const ClosingText = styled.p`
  max-width: 48rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.98rem;
  line-height: 1.8;
`

export const ClosingActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const ClosingLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 46px;
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.92rem;
  font-weight: 700;

  svg {
    width: 0.95rem;
    height: 0.95rem;
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`

export const Footer = styled.footer`
  width: ${({ theme }) => theme.layout.content};
  margin: 1.7rem auto 0;
  padding-top: 1.15rem;
  border-top: 1px solid rgba(131, 154, 201, 0.1);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FooterName = styled.p`
  font-size: 0.96rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`

export const FooterRole = styled.p`
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const FooterMeta = styled.p`
  margin-top: 0.55rem;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.9rem;
`

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.92rem;
  font-weight: 600;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`
