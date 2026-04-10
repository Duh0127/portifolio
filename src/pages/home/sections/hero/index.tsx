import profileImage from '../../../../assets/edu_dev.png'
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
import { enterFromTop, hoverLift, reveal } from '../../utils/motion'
import HeroSocialLinks from './components/HeroSocialLinks'
import HeroSignals from './components/HeroSignals'
import HeroSummaryMetrics from './components/HeroSummaryList'

type HeroSectionProps = {
  reducedMotion: boolean
}

export default function HomeHeroSection({
  reducedMotion,
}: HeroSectionProps) {
  return (
    <HeroSection id="inicio">
      <HeroGrid>
        <HeroCopy {...enterFromTop(reducedMotion)}>
          <HeroEyebrow>Full Stack Developer / backend-first</HeroEyebrow>

          <HeroTitle>
            Backend sólido para produtos em crescimento.
            <HeroTitleAccent>
              Full stack quando a interface pede o mesmo cuidado.
            </HeroTitleAccent>
          </HeroTitle>

          <HeroLead>
            Sou Eduardo Okubo, desenvolvedor full stack com foco principal em
            backend. Trabalho com NodeJs, NestJs, SQL, NoSQL, Python, Docker,
            DevOps e integrações com LLMs, sem perder o rigor quando o produto
            também precisa de ReactJs e NextJs.
          </HeroLead>

          <HeroBody>
            Procuro manter a base técnica legível, organizada e segura para
            evoluir. Gosto de colaborar, ajudar o time a ganhar clareza e tomar
            decisões que continuam fazendo sentido depois da primeira entrega.
          </HeroBody>

          <HeroSignals reducedMotion={reducedMotion} />

          <HeroActions>
            <PrimaryAction
              href="/#contato"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Falar sobre um projeto
            </PrimaryAction>

            <SecondaryAction
              href="/#projetos"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver projetos publicados
            </SecondaryAction>
          </HeroActions>

          <HeroSocialLinks />
        </HeroCopy>

        <HeroAside {...reveal(reducedMotion, 0.12)}>
          <HeroPortraitCard whileHover={hoverLift(reducedMotion)}>
            <HeroPortraitFrame>
              <HeroPortraitImage src={profileImage} alt="Retrato de Eduardo Okubo" />
              <HeroPortraitMeta>
                <div>
                  <HeroPortraitName>Eduardo Okubo</HeroPortraitName>
                  <HeroPortraitRole>
                    Full Stack Developer / backend-first
                  </HeroPortraitRole>
                </div>
                <HeroPortraitBadge>
                  <span>Disponível para projetos</span>
                </HeroPortraitBadge>
              </HeroPortraitMeta>
            </HeroPortraitFrame>
          </HeroPortraitCard>

          <HeroPanel whileHover={hoverLift(reducedMotion)}>
            <HeroPanelKicker>Onde costumo atuar</HeroPanelKicker>
            <HeroPanelTitle>
              Arquitetura, integrações e dados com critério de produto.
            </HeroPanelTitle>
            <HeroPanelText>
              Meu interesse está menos em cenografia e mais em fazer o sistema
              ficar claro para o time, robusto para o produto e simples de
              manter quando a complexidade chega.
            </HeroPanelText>
            <HeroPanelNote>
              Backend é o centro do meu trabalho, mas não trato a interface
              como detalhe. Quando preciso entrar no frontend, levo a mesma
              disciplina de estrutura, legibilidade e coerência.
            </HeroPanelNote>
          </HeroPanel>

          <HeroSummaryCard>
            <HeroSummaryMetrics reducedMotion={reducedMotion} />
          </HeroSummaryCard>
        </HeroAside>
      </HeroGrid>
    </HeroSection>
  )
}
