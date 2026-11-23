import { Magnetic, Scramble, Tilt } from '../../../../components/fx'
import profileImage from '../../../../assets/edu_dev.png'
import { useT } from '../../../../i18n'
import {
  HeroActions,
  HeroAside,
  HeroBody,
  HeroCopy,
  HeroEyebrow,
  HeroGrid,
  HeroLead,
  HeroPanel,
  HeroPanelKicker,
  HeroPanelNote,
  HeroPanelText,
  HeroPanelTitle,
  HeroPortraitBadge,
  HeroPortraitCard,
  HeroPortraitFrame,
  HeroPortraitImage,
  HeroPortraitMeta,
  HeroPortraitName,
  HeroPortraitRole,
  HeroSection,
  HeroSummaryCard,
  HeroTitle,
  HeroTitleAccent,
  PrimaryAction,
  SecondaryAction,
} from '../../styles'
import { enterFromTop, reveal } from '../../utils/motion'
import HeroSocialLinks from './components/HeroSocialLinks'
import HeroSignals from './components/HeroSignals'
import HeroSummaryMetrics from './components/HeroSummaryList'

type HeroSectionProps = {
  reducedMotion: boolean
}

export default function HomeHeroSection({ reducedMotion }: HeroSectionProps) {
  const t = useT().hero

  return (
    <HeroSection id="inicio">
      <HeroGrid>
        <HeroCopy {...enterFromTop(reducedMotion)}>
          <HeroEyebrow>
            <Scramble text={t.eyebrow} />
          </HeroEyebrow>

          <HeroTitle>
            {t.title}
            <HeroTitleAccent>{t.accent}</HeroTitleAccent>
          </HeroTitle>

          <HeroLead>{t.lead}</HeroLead>
          <HeroBody>{t.body}</HeroBody>

          <HeroSignals reducedMotion={reducedMotion} />

          <HeroActions>
            <Magnetic>
              <PrimaryAction href="/#contato" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {t.primary}
              </PrimaryAction>
            </Magnetic>

            <Magnetic>
              <SecondaryAction href="/#projetos" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {t.secondary}
              </SecondaryAction>
            </Magnetic>
          </HeroActions>

          <HeroSocialLinks />
        </HeroCopy>

        <HeroAside {...reveal(reducedMotion, 0.12)}>
          <Tilt>
            <HeroPortraitCard>
              <HeroPortraitFrame>
                <HeroPortraitImage src={profileImage} alt={t.portraitAlt} />
                <HeroPortraitMeta>
                  <div>
                    <HeroPortraitName>Eduardo Okubo</HeroPortraitName>
                    <HeroPortraitRole>{t.portraitRole}</HeroPortraitRole>
                  </div>
                  <HeroPortraitBadge>
                    <span>{t.badge}</span>
                  </HeroPortraitBadge>
                </HeroPortraitMeta>
              </HeroPortraitFrame>
            </HeroPortraitCard>
          </Tilt>

          <Tilt max={5}>
            <HeroPanel>
              <HeroPanelKicker>{t.panelKicker}</HeroPanelKicker>
              <HeroPanelTitle>{t.panelTitle}</HeroPanelTitle>
              <HeroPanelText>{t.panelText}</HeroPanelText>
              <HeroPanelNote>{t.panelNote}</HeroPanelNote>
            </HeroPanel>
          </Tilt>

          <HeroSummaryCard>
            <HeroSummaryMetrics reducedMotion={reducedMotion} />
          </HeroSummaryCard>
        </HeroAside>
      </HeroGrid>
    </HeroSection>
  )
}
