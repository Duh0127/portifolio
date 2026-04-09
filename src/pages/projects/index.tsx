import { useReducedMotion } from 'motion/react'

import { socialLinks } from '../home/content'
import { projects } from './data'
import {
  AmbientField,
  AmbientGrid,
  Badge,
  BadgeGroup,
  BadgeGroupLabel,
  BadgeList,
  ClosingActions,
  ClosingCard,
  ClosingGrid,
  ClosingLink,
  ClosingText,
  ClosingTitle,
  Footer,
  FooterLink,
  FooterLinks,
  FooterMeta,
  FooterName,
  FooterRole,
  HeroActions,
  HeroAside,
  HeroBody,
  HeroCopy,
  HeroEyebrow,
  HeroGrid,
  HeroLead,
  HeroSection,
  HeroTitle,
  HeroTitleAccent,
  OverviewCard,
  OverviewItem,
  OverviewItemLabel,
  OverviewItemText,
  OverviewItemValue,
  OverviewList,
  OverviewText,
  OverviewTitle,
  Page,
  PrimaryAction,
  ProjectCard,
  ProjectColumn,
  ProjectBullet,
  ProjectBulletList,
  ProjectColumnLabel,
  ProjectHighlights,
  ProjectLink,
  ProjectMain,
  ProjectName,
  ProjectOfficialText,
  ProjectRail,
  ProjectRailMeta,
  ProjectSummary,
  ProjectSurface,
  ProjectTag,
  Section,
  SectionDescription,
  SectionEyebrow,
  SectionHeading,
  SectionInner,
  SectionTitle,
  SecondaryAction,
} from './styles'

const EASE = [0.16, 1, 0.3, 1] as const

type SectionIntroProps = {
  description: string
  eyebrow: string
  reducedMotion: boolean
  title: string
}

const reveal = (reducedMotion: boolean, delay = 0) =>
  reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: {
          duration: 0.72,
          delay,
          ease: EASE,
        },
      }

function SectionIntro({
  description,
  eyebrow,
  reducedMotion,
  title,
}: SectionIntroProps) {
  return (
    <SectionHeading {...reveal(reducedMotion)}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </SectionHeading>
  )
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion() ?? false
  const currentYear = new Date().getFullYear()
  const githubLink =
    socialLinks.find(({ label }) => label === 'GitHub')?.href ?? '#'

  const overviewItems = [
    {
      label: 'Seleção',
      value: '2 projetos publicados',
      text: 'Um recorte enxuto do que melhor representa meu jeito de construir.',
    },
    {
      label: 'Recorte técnico',
      value: 'NestJS + IA full stack',
      text: 'Backend como base, com frontend entrando quando a experiência pede.',
    },
    {
      label: 'Critério',
      value: 'Resumo apoiado no código',
      text: 'Usei a descrição dos repositórios e a estrutura real de cada projeto.',
    },
  ]

  return (
    <Page>
      <AmbientField />
      <AmbientGrid />

      <HeroSection>
        <HeroGrid>
          <HeroCopy
            {...(!prefersReducedMotion && {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.74, ease: EASE },
            })}
          >
            <HeroEyebrow>Projetos publicados</HeroEyebrow>

            <HeroTitle>
              Projetos que deixam meu foco em backend visível na prática.
              <HeroTitleAccent>
                Da API enxuta ao produto full stack com IA.
              </HeroTitleAccent>
            </HeroTitle>

            <HeroLead>
              Em vez de encher a página com trabalhos desconectados, reuni aqui
              dois projetos que mostram como penso arquitetura, fluxo de dados,
              integração e experiência de uso com mais clareza.
            </HeroLead>

            <HeroBody>
              Cada resumo abaixo parte da descrição pública do repositório e do
              que o código entrega de fato. A ideia é facilitar a leitura para
              quem quiser entender rápido o que cada projeto faz e o que ele
              representa no meu percurso.
            </HeroBody>

            <HeroActions>
              <PrimaryAction
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver perfil no GitHub
              </PrimaryAction>

              <SecondaryAction
                href="/"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Voltar para a home
              </SecondaryAction>
            </HeroActions>
          </HeroCopy>

          <HeroAside {...reveal(prefersReducedMotion, 0.12)}>
            <OverviewCard
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.24 } }
              }
            >
              <SectionEyebrow>Leitura da página</SectionEyebrow>
              <OverviewTitle>
                Menos vitrine, mais contexto técnico.
              </OverviewTitle>
              <OverviewText>
                Prefiro apresentar poucos projetos com mais critério do que uma
                sequência longa de blocos superficiais. Aqui o objetivo é mostrar
                intenção de produto, organização de código e decisões que fazem
                sentido para manutenção.
              </OverviewText>
            </OverviewCard>

            <OverviewCard
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.24 } }
              }
            >
              <OverviewList>
                {overviewItems.map((item, index) => (
                  <OverviewItem
                    key={item.label}
                    {...reveal(prefersReducedMotion, 0.18 + index * 0.05)}
                  >
                    <OverviewItemLabel>{item.label}</OverviewItemLabel>
                    <OverviewItemValue>{item.value}</OverviewItemValue>
                    <OverviewItemText>{item.text}</OverviewItemText>
                  </OverviewItem>
                ))}
              </OverviewList>
            </OverviewCard>
          </HeroAside>
        </HeroGrid>
      </HeroSection>

      <Section id="cases">
        <SectionInner>
          <SectionIntro
            eyebrow="Casos selecionados"
            title="Dois recortes diferentes do meu trabalho, com a mesma busca por clareza."
            description="TaskTrack mostra meu interesse em base backend bem estruturada. TalkAI amplia esse recorte para um produto full stack com IA, streaming, arquivos e uma interface mais completa."
            reducedMotion={prefersReducedMotion}
          />

          <ProjectSurface>
            {projects.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, '0')
              const isReverse = index % 2 === 1

              return (
                <ProjectCard
                  key={project.name}
                  $reverse={isReverse}
                  {...reveal(prefersReducedMotion, 0.08 + index * 0.08)}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -4, transition: { duration: 0.24 } }
                  }
                >
                  <ProjectRail $reverse={isReverse}>
                    <ProjectRailMeta>
                      <ProjectTag>{projectNumber}</ProjectTag>
                      <ProjectTag>{project.category}</ProjectTag>
                    </ProjectRailMeta>

                    <ProjectOfficialText>
                      <strong>Descrição do repositório:</strong>{' '}
                      {project.officialDescription}
                    </ProjectOfficialText>

                    <ProjectLink
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Abrir projeto no GitHub
                    </ProjectLink>
                  </ProjectRail>

                  <ProjectMain $reverse={isReverse}>
                    <ProjectName>{project.name}</ProjectName>
                    <ProjectSummary>{project.summary}</ProjectSummary>

                    <ProjectHighlights>
                      <ProjectColumn>
                        <ProjectColumnLabel>
                          O que esse projeto representa para mim
                        </ProjectColumnLabel>
                        <SectionDescription as="p">
                          {project.significance}
                        </SectionDescription>
                      </ProjectColumn>

                      <ProjectColumn>
                        <ProjectColumnLabel>
                          Pontos mais visíveis na implementação
                        </ProjectColumnLabel>
                        <ProjectBulletList>
                          {project.highlights.map((highlight) => (
                            <ProjectBullet key={highlight}>{highlight}</ProjectBullet>
                          ))}
                        </ProjectBulletList>
                      </ProjectColumn>
                    </ProjectHighlights>

                    <ProjectHighlights>
                      <BadgeGroup>
                        <BadgeGroupLabel>Stack</BadgeGroupLabel>
                        <BadgeList>
                          {project.stack.map((item) => (
                            <Badge key={item}>{item}</Badge>
                          ))}
                        </BadgeList>
                      </BadgeGroup>

                      <BadgeGroup>
                        <BadgeGroupLabel>Conceitos aplicados</BadgeGroupLabel>
                        <BadgeList>
                          {project.concepts.map((item) => (
                            <Badge key={item}>{item}</Badge>
                          ))}
                        </BadgeList>
                      </BadgeGroup>
                    </ProjectHighlights>
                  </ProjectMain>
                </ProjectCard>
              )
            })}
          </ProjectSurface>
        </SectionInner>
      </Section>

      <Section id="continuar">
        <SectionInner>
          <ClosingCard {...reveal(prefersReducedMotion)}>
            <ClosingGrid>
              <div>
                <SectionEyebrow>Continuar a conversa</SectionEyebrow>
                <ClosingTitle>
                  Se quiser ver mais código ou entender alguma decisão de
                  arquitetura, os repositórios estão públicos.
                </ClosingTitle>
                <ClosingText>
                  Também posso explicar o contexto de cada projeto com mais
                  profundidade ou conversar sobre um novo trabalho com foco em
                  backend, integração e estrutura de produto.
                </ClosingText>
              </div>

              <ClosingActions>
                {socialLinks.map(({ label, href, Icon }) => (
                  <ClosingLink
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon />
                    {label}
                  </ClosingLink>
                ))}
              </ClosingActions>
            </ClosingGrid>
          </ClosingCard>

          <Footer>
            <div>
              <FooterName>Eduardo Okubo</FooterName>
              <FooterRole>Full Stack Developer / backend-first</FooterRole>
              <FooterMeta>
                Copyright {currentYear} Eduardo Okubo. Projetos publicados e
                resumidos com base na estrutura real dos repositórios.
              </FooterMeta>
            </div>

            <FooterLinks>
              {socialLinks.map(({ label, href }) => (
                <FooterLink
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </FooterLink>
              ))}
            </FooterLinks>
          </Footer>
        </SectionInner>
      </Section>
    </Page>
  )
}
