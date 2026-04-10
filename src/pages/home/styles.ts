import { motion } from 'motion/react'
import styled, { css, keyframes } from 'styled-components'

const panelSurface = css`
  border: 1px solid rgba(144, 171, 222, 0.16);
  background:
    linear-gradient(
      180deg,
      rgba(13, 18, 29, 0.92) 0%,
      rgba(7, 10, 18, 0.9) 100%
    );
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    inset 0 -24px 48px rgba(1, 5, 12, 0.16);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
`

const actionBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 52px;
  padding: 0.92rem 1.28rem;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: -0.01em;
`

const orbitBorder = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
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
      circle at 50% 8%,
      rgba(99, 122, 170, 0.08) 0%,
      transparent 28%
    ),
    radial-gradient(
      circle at 12% 28%,
      rgba(67, 83, 121, 0.06) 0%,
      transparent 20%
    ),
    radial-gradient(
      circle at 88% 34%,
      rgba(74, 95, 143, 0.05) 0%,
      transparent 20%
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
  mask-image: linear-gradient(180deg, black 0%, transparent 82%);
  opacity: 0.16;
  pointer-events: none;
`

export const HeroSection = styled.section`
  padding: 9.5rem 6.25rem 5.5rem 6.25rem;

  @media (max-width: 720px) {
    padding-top: 7.25rem;
    padding-bottom: 4.25rem;
  }
`

export const HeroGrid = styled.div`
  width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
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
  max-width: 41rem;
`

export const HeroEyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 2rem;
  padding: 0.38rem 0.78rem;
  border: 1px solid rgba(148, 176, 233, 0.14);
  border-radius: 999px;
  background: rgba(10, 14, 24, 0.7);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.73rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const HeroTitle = styled.h1`
  max-width: 11ch;
  margin-top: 1.35rem;
  font-size: clamp(3.05rem, 7vw, 5.4rem);
  line-height: 0.94;
  letter-spacing: -0.05em;
  text-wrap: balance;
`

export const HeroTitleAccent = styled.span`
  display: block;
  margin-top: 0.55rem;
  color: ${({ theme }) => theme.colors.brand.primary};
`

export const HeroLead = styled.p`
  max-width: 54ch;
  margin-top: 1.65rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: clamp(1.04rem, 2vw, 1.16rem);
  line-height: 1.76;
`

export const HeroBody = styled.p`
  max-width: 54ch;
  margin-top: 1.05rem;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.98rem;
  line-height: 1.78;
`

export const HeroSignalList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.55rem;
`

export const HeroSignalItem = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  min-height: 2.2rem;
  padding: 0.55rem 0.82rem;
  border-radius: 999px;
  border: 1px solid rgba(131, 154, 201, 0.14);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.025) 100%
  );
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.84rem;
  font-weight: 600;
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.95rem;
  margin-top: 2.2rem;
`

export const PrimaryAction = styled(motion.a)`
  ${actionBase}
  background:
    linear-gradient(
      135deg,
      rgba(241, 246, 255, 0.98) 0%,
      rgba(170, 197, 248, 0.96) 100%
    );
  color: ${({ theme }) => theme.colors.text.inverse};
  box-shadow:
    0 18px 38px rgba(77, 109, 177, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.52);
`

export const SecondaryAction = styled(motion.a)`
  ${actionBase}
  border: 1px solid rgba(148, 176, 233, 0.16);
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.025) 100%
    );
  color: ${({ theme }) => theme.colors.text.primary};
`

export const SocialInlineList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.55rem;
`

export const SocialInlineLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  min-height: 2.45rem;
  padding: 0.55rem 0.78rem;
  border-radius: 999px;
  border: 1px solid rgba(131, 154, 201, 0.1);
  background: rgba(255, 255, 255, 0.025);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: 600;

  svg {
    width: 0.95rem;
    height: 0.95rem;
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const HeroAside = styled(motion.aside)`
  display: grid;
  gap: 1.1rem;

  @media (max-width: 980px) {
    max-width: 40rem;
  }
`

export const HeroPortraitCard = styled(motion.article)`
  ${panelSurface}
  position: relative;
  border-radius: 30px;
  padding: 1rem;
  overflow: hidden;
`

export const HeroPortraitFrame = styled.div`
  position: relative;
  aspect-ratio: 0.94;
  border-radius: 22px;
  overflow: hidden;
  background:
    radial-gradient(
      circle at top,
      rgba(132, 159, 214, 0.12) 0%,
      transparent 42%
    ),
    linear-gradient(
      180deg,
      rgba(16, 21, 31, 0.96) 0%,
      rgba(8, 11, 17, 0.98) 100%
    );

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(4, 7, 12, 0) 35%, rgba(4, 7, 12, 0.68) 100%);
    pointer-events: none;
  }
`

export const HeroPortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  filter: saturate(0.92) contrast(1.04);
`

export const HeroPortraitMeta = styled.div`
  position: absolute;
  left: 1.35rem;
  right: 1.35rem;
  bottom: 1.35rem;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const HeroPortraitName = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`

export const HeroPortraitRole = styled.p`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`

export const HeroPortraitBadge = styled.span`
  display: inline-block;
  position: relative;
  border-radius: 999px;
  isolation: isolate;
  overflow: hidden;
  padding: 1px;
  background: rgba(3, 6, 12, 0.92);
  box-shadow:
    0 14px 30px rgba(6, 10, 18, 0.5),
    0 0 24px rgba(75, 124, 219, 0.18);
  white-space: nowrap;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    inset: -140%;
    z-index: -2;
    background: conic-gradient(
      from 180deg,
      rgba(80, 135, 255, 0) 0deg,
      rgba(80, 135, 255, 0.16) 56deg,
      rgba(132, 190, 255, 0.9) 112deg,
      rgba(80, 135, 255, 0.22) 164deg,
      rgba(80, 135, 255, 0) 220deg,
      rgba(80, 135, 255, 0) 360deg
    );
    animation: ${orbitBorder} 5s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      rgba(7, 11, 19, 0.96) 0%,
      rgba(2, 5, 11, 0.98) 100%
    );
    box-shadow: inset 0 1px 0 rgba(165, 203, 255, 0.08);
  }

  > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 34px;
    padding: 0.7rem 1.15rem;
    position: relative;
    z-index: 1;
    color: #eef4ff;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.2;
    font-family: ${({ theme }) => theme.fonts.mono};
  }
`

export const HeroPanel = styled(motion.article)`
  ${panelSurface}
  border-radius: 30px;
  padding: 1.65rem;
`

export const HeroPanelKicker = styled.p`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 2rem;
  padding: 0.36rem 0.74rem;
  border: 1px solid rgba(148, 176, 233, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.025);
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.73rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const HeroPanelTitle = styled.h2`
  max-width: 14ch;
  margin-top: 1.05rem;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  line-height: 1.04;
  letter-spacing: -0.04em;
`

export const HeroPanelText = styled.p`
  max-width: 44ch;
  margin-top: 0.95rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.96rem;
  line-height: 1.8;
`

export const HeroPanelNote = styled.p`
  margin-top: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(131, 154, 201, 0.12);
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.9rem;
  line-height: 1.7;
`

export const HeroSummaryCard = styled(motion.div)`
  ${panelSurface}
  border-radius: 30px;
  padding: 0.8rem 1.3rem;
`

export const HeroSummaryList = styled.dl`
  display: grid;
`

export const HeroSummaryItem = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(120px, 0.35fr) minmax(0, 1fr);
  gap: 1rem;
  padding: 0.95rem 0;
  border-bottom: 1px solid rgba(131, 154, 201, 0.1);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
`

export const HeroSummaryLabel = styled.dt`
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const HeroSummaryValue = styled.dd`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.7;
`

export const Section = styled.section`
  padding: 0 0 clamp(5.75rem, 9vw, 8.25rem);
`

export const SectionInner = styled.div`
  width: ${({ theme }) => theme.layout.content};
  margin: 0 auto;
`

export const SectionHeading = styled(motion.div) <{ $align?: 'left' | 'center' }>`
  max-width: 42rem;
  margin-bottom: 2.35rem;
  text-align: ${({ $align = 'left' }) => $align};

  ${({ $align = 'left' }) =>
    $align === 'center' &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
`

export const SectionEyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  min-height: 2rem;
  padding: 0.38rem 0.78rem;
  border: 1px solid rgba(148, 176, 233, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.024);
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

export const SectionTitle = styled.h2`
  margin-top: 1.05rem;
  font-size: clamp(2rem, 4.7vw, 3.35rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
  text-wrap: balance;
`

export const SectionDescription = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.98rem;
  line-height: 1.78;
`

export const AboutLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 0.72fr) minmax(0, 1.28fr);
  gap: clamp(1.8rem, 4vw, 4.5rem);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export const AboutIntro = styled.div`
  align-self: start;

  @media (min-width: 981px) {
    position: sticky;
    top: 7.2rem;
  }
`

export const AboutBodyColumn = styled.div`
  display: grid;
  gap: 2rem;
`

export const AboutTextBlock = styled(motion.div)`
  padding-top: 0.6rem;
`

export const AboutParagraph = styled.p`
  max-width: 66ch;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.9;

  & + & {
    margin-top: 1rem;
  }
`

export const AboutNote = styled(motion.aside)`
  ${panelSurface}
  position: relative;
  padding: 1.5rem;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.8;

  &::before {
    content: '';
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
    bottom: 1.2rem;
    width: 2px;
    border-radius: 999px;
    background: linear-gradient(
      180deg,
      rgba(148, 176, 233, 0.9) 0%,
      rgba(148, 176, 233, 0.18) 100%
    );
  }

  padding-left: 1.85rem;
`

export const AboutAreasList = styled.div`
  border-top: 1px solid rgba(131, 154, 201, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
`

export const AboutAreaItem = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(180px, 0.45fr) minmax(0, 1fr);
  gap: 1rem 1.5rem;
  padding: 1.2rem 1rem;
  border-radius: 22px;
  border-bottom: 1px solid rgba(131, 154, 201, 0.12);
  background: rgba(255, 255, 255, 0.018);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const AboutAreaTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.3;
`

export const AboutAreaText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.8;
`

export const StackBoard = styled(motion.section)`
  ${panelSurface}
  border-radius: 32px;
  padding: clamp(1.6rem, 3vw, 2.1rem);
`

export const StackRows = styled.div`
  margin-top: 1.25rem;
  border-top: 1px solid rgba(131, 154, 201, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
`

export const StackRow = styled(motion.article)`
  display: grid;
  grid-template-columns: auto minmax(120px, 0.3fr) minmax(0, 0.9fr) minmax(220px, 0.8fr);
  gap: 1rem 1.2rem;
  align-items: start;
  padding: 1.25rem 1rem;
  border-radius: 22px;
  border-bottom: 1px solid rgba(131, 154, 201, 0.12);
  background: rgba(255, 255, 255, 0.018);

  @media (max-width: 920px) {
    grid-template-columns: auto 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

export const StackIndex = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

export const StackName = styled.h3`
  font-size: 1.02rem;
  line-height: 1.3;
`

export const StackDescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.8;
`

export const StackTechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: flex-end;

  @media (max-width: 920px) {
    grid-column: 2;
    justify-content: flex-start;
  }

  @media (max-width: 620px) {
    grid-column: auto;
  }
`

export const StackTech = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(131, 154, 201, 0.18);
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.025) 100%
  );
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.84rem;
  font-weight: 600;
`

export const ApproachLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
  gap: clamp(1.8rem, 4vw, 4rem);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export const ApproachIntro = styled(motion.article)`
  ${panelSurface}
  padding: clamp(1.65rem, 3vw, 2.15rem);
  border-radius: 30px;
`

export const ApproachLead = styled.h3`
  max-width: 16ch;
  margin-top: 0.9rem;
  font-size: clamp(1.75rem, 3vw, 2.6rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
`

export const ApproachBody = styled.p`
  max-width: 46ch;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.97rem;
  line-height: 1.85;
`

export const ApproachNote = styled.p`
  margin-top: 1.4rem;
  padding-top: 1.1rem;
  border-top: 1px solid rgba(131, 154, 201, 0.12);
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.92rem;
  line-height: 1.75;
`

export const ApproachList = styled.div`
  border-top: 1px solid rgba(131, 154, 201, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0px;
`

export const ApproachItem = styled(motion.article)`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 1rem 1.2rem;
  padding: 1.3rem 1rem;
  border-radius: 22px;
  border-bottom: 1px solid rgba(131, 154, 201, 0.12);
  background: rgba(255, 255, 255, 0.018);

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const ApproachNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  border: 1px solid rgba(131, 154, 201, 0.16);
  color: ${({ theme }) => theme.colors.brand.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const ApproachItemTitle = styled.h3`
  font-size: 1.08rem;
  line-height: 1.35;
`

export const ApproachItemText = styled.p`
  margin-top: 0.55rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.8;
`

export const ContactCard = styled(motion.section)`
  ${panelSurface}
  border-radius: 32px;
  padding: clamp(1.7rem, 3vw, 2.25rem);
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.5rem;
  align-items: end;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

export const ContactTitle = styled.h2`
  max-width: 20ch;
  margin-top: 1.05rem;
  font-size: clamp(2rem, 4.8vw, 3.25rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
  text-wrap: balance;
`

export const ContactText = styled.p`
  max-width: 48rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.98rem;
  line-height: 1.8;
`

export const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

export const ContactLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 48px;
  padding: 0.82rem 1rem;
  border: 1px solid rgba(131, 154, 201, 0.16);
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
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
