import { useReducedMotion } from 'motion/react'

import profileImage from '../../assets/edu_dev.png'
import {
  aboutAreas,
  approachItems,
  heroSummary,
  socialLinks,
  stackGroups,
} from './content'
import {
  AboutAreaItem,
  AboutAreaText,
  AboutAreasList,
  AboutAreaTitle,
  AboutBodyColumn,
  AboutIntro,
  AboutLayout,
  AboutNote,
  AboutParagraph,
  AboutTextBlock,
  AmbientField,
  AmbientGrid,
  ApproachBody,
  ApproachIntro,
  ApproachItem,
  ApproachItemText,
  ApproachItemTitle,
  ApproachLayout,
  ApproachLead,
  ApproachList,
  ApproachNote,
  ApproachNumber,
  ContactActions,
  ContactCard,
  ContactGrid,
  ContactLink,
  ContactText,
  ContactTitle,
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
  HeroSummaryItem,
  HeroSummaryLabel,
  HeroSummaryList,
  HeroSummaryValue,
  HeroTitle,
  HeroTitleAccent,
  Page,
  PrimaryAction,
  SecondaryAction,
  Section,
  SectionDescription,
  SectionEyebrow,
  SectionHeading,
  SectionInner,
  SectionTitle,
  SocialInlineLink,
  SocialInlineList,
  StackBoard,
  StackDescriptionText,
  StackIndex,
  StackName,
  StackRow,
  StackRows,
  StackTech,
  StackTechList,
} from './styles'

const EASE = [0.16, 1, 0.3, 1] as const

type SectionIntroProps = {
  align?: 'left' | 'center'
  description: string
  delay?: number
  reducedMotion: boolean
  title: string
  eyebrow: string
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
  align = 'left',
  description,
  delay = 0,
  reducedMotion,
  title,
  eyebrow,
}: SectionIntroProps) {
  return (
    <SectionHeading $align={align} {...reveal(reducedMotion, delay)}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </SectionHeading>
  )
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion() ?? false
  const currentYear = new Date().getFullYear()

  return (
    <Page>
      <AmbientField />
      <AmbientGrid />

      <HeroSection id="inicio">
        <HeroGrid>
          <HeroCopy
            {...(!prefersReducedMotion && {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.74, ease: EASE },
            })}
          >
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
              evoluir. Gosto de colaborar, ajudar o time a ganhar clareza e
              tomar decisões que continuam fazendo sentido depois da primeira
              entrega.
            </HeroBody>

            <HeroActions>
              <PrimaryAction
                href="/#contato"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Falar sobre um projeto
              </PrimaryAction>

              <SecondaryAction
                href="/#stacks"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver stack e soft skills
              </SecondaryAction>
            </HeroActions>

            <SocialInlineList>
              {socialLinks.map(({ label, href, Icon }) => (
                <SocialInlineLink
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon />
                  {label}
                </SocialInlineLink>
              ))}
            </SocialInlineList>
          </HeroCopy>

          <HeroAside {...reveal(prefersReducedMotion, 0.12)}>
            <HeroPortraitCard
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { y: -4, transition: { duration: 0.24 } }
              }
            >
              <HeroPortraitFrame>
                <HeroPortraitImage
                  src={profileImage}
                  alt="Retrato de Eduardo Okubo"
                />
                <HeroPortraitMeta>
                  <div>
                    <HeroPortraitName>Eduardo Okubo</HeroPortraitName>
                    <HeroPortraitRole>Full Stack Developer / backend-first</HeroPortraitRole>
                  </div>
                  <HeroPortraitBadge>Disponível para projetos</HeroPortraitBadge>
                </HeroPortraitMeta>
              </HeroPortraitFrame>
            </HeroPortraitCard>

            <HeroPanel
              whileHover={
                prefersReducedMotion ? undefined : { y: -4, transition: { duration: 0.24 } }
              }
            >
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
              <HeroSummaryList>
                {heroSummary.map((item, index) => (
                  <HeroSummaryItem key={item.label} {...reveal(prefersReducedMotion, 0.18 + index * 0.05)}>
                    <HeroSummaryLabel>{item.label}</HeroSummaryLabel>
                    <HeroSummaryValue>{item.value}</HeroSummaryValue>
                  </HeroSummaryItem>
                ))}
              </HeroSummaryList>
            </HeroSummaryCard>
          </HeroAside>
        </HeroGrid>
      </HeroSection>

      <Section id="sobre">
        <SectionInner>
          <AboutLayout>
            <AboutIntro>
              <SectionIntro
                eyebrow="Perfil"
                title="Full stack no escopo. Backend no centro das decisões."
                description="Prefiro pensar na estrutura do produto antes do efeito visual. Meu trabalho costuma ficar onde integração, regra de negócio, modelagem e manutenção precisam conversar direito."
                reducedMotion={prefersReducedMotion}
              />
            </AboutIntro>

            <AboutBodyColumn>
              <AboutTextBlock {...reveal(prefersReducedMotion, 0.06)}>
                <AboutParagraph>
                  Não tento vender uma imagem de designer disfarçado de
                  desenvolvedor. O que me interessa e construir software
                  confiável, com arquitetura clara e um nível de acabamento que
                  respeite quem vai usar e quem vai manter o projeto.
                </AboutParagraph>

                <AboutParagraph>
                  Por isso, meu foco técnico está em backend. APIs, integrações,
                  dados, organização de serviços e qualidade de código são o
                  lugar onde costumo gerar mais valor. O lado full stack entra
                  para completar a entrega quando a interface também precisa do
                  mesmo cuidado estrutural.
                </AboutParagraph>
              </AboutTextBlock>

              <AboutNote {...reveal(prefersReducedMotion, 0.1)}>
                Gosto de times em que documentar decisões, nomear bem,
                refatorar com critério e explicar o raciocínio faz parte do
                trabalho. Isso deixa o produto mais sustentável e melhora a
                experiência de todo mundo no processo.
              </AboutNote>

              <AboutAreasList>
                {aboutAreas.map((item, index) => (
                  <AboutAreaItem
                    key={item.title}
                    {...reveal(prefersReducedMotion, 0.14 + index * 0.04)}
                    whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                  >
                    <AboutAreaTitle>{item.title}</AboutAreaTitle>
                    <AboutAreaText>{item.text}</AboutAreaText>
                  </AboutAreaItem>
                ))}
              </AboutAreasList>
            </AboutBodyColumn>
          </AboutLayout>
        </SectionInner>
      </Section>

      <Section id="stacks">
        <SectionInner>
          <StackBoard {...reveal(prefersReducedMotion)}>
            <SectionIntro
              eyebrow="Stack"
              title="Tecnologia escolhida pelo problema, não pelo hype."
              description="Estas são as combinações que mais uso no dia a dia. Em vez de espalhar badges, prefiro mostrar como cada parte entra quando o produto pede estrutura, integração e manutenção."
              reducedMotion={prefersReducedMotion}
            />

            <StackRows>
              {stackGroups.map((group, index) => (
                <StackRow
                  key={group.name}
                  {...reveal(prefersReducedMotion, 0.08 + index * 0.04)}
                  whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                >
                  <StackIndex>{group.index}</StackIndex>
                  <StackName>{group.name}</StackName>
                  <StackDescriptionText>{group.description}</StackDescriptionText>
                  <StackTechList>
                    {group.technologies.map((technology) => (
                      <StackTech key={technology}>{technology}</StackTech>
                    ))}
                  </StackTechList>
                </StackRow>
              ))}
            </StackRows>
          </StackBoard>
        </SectionInner>
      </Section>

      <Section id="soft-skills">
        <SectionInner>
          <ApproachLayout>
            <ApproachIntro {...reveal(prefersReducedMotion)}>
              <SectionEyebrow>Soft Skills</SectionEyebrow>
              <ApproachLead>
                Prefiro ambientes em que código é tratado como parte do produto,
                não como detalhe invisível da entrega.
              </ApproachLead>
              <ApproachBody>
                Trabalho bem em equipe, gosto de ajudar outras pessoas e tento
                construir contexto junto com a implementação. Isso vale tanto
                para a conversa técnica quanto para a forma como o sistema vai
                evoluir depois.
              </ApproachBody>
              <ApproachNote>
                Na prática, isso se traduz em aplicar SOLID, Clean Code, POO e
                boas práticas com critério. Não como checklist de vaidade, mas
                como ferramentas para deixar o código mais claro, previsível e
                sustentável.
              </ApproachNote>
            </ApproachIntro>

            <ApproachList>
              {approachItems.map((item, index) => (
                <ApproachItem
                  key={item.number}
                  {...reveal(prefersReducedMotion, 0.08 + index * 0.05)}
                  whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                >
                  <ApproachNumber>{item.number}</ApproachNumber>
                  <div>
                    <ApproachItemTitle>{item.title}</ApproachItemTitle>
                    <ApproachItemText>{item.text}</ApproachItemText>
                  </div>
                </ApproachItem>
              ))}
            </ApproachList>
          </ApproachLayout>
        </SectionInner>
      </Section>

      <Section id="contato">
        <SectionInner>
          <ContactCard {...reveal(prefersReducedMotion)}>
            <ContactGrid>
              <div>
                <SectionEyebrow>Contato</SectionEyebrow>
                <ContactTitle>
                  Se fizer sentido conversar sobre backend, arquitetura ou um
                  produto que precisa ganhar estrutura, meus links estão aqui.
                </ContactTitle>
                <ContactText>
                  Posso ajudar em APIs, integrações, dados, fluxos com IA e
                  também na parte de interface quando o projeto precisa de uma
                  entrega mais completa e bem amarrada.
                </ContactText>
              </div>

              <ContactActions>
                {socialLinks.map(({ label, href, Icon }) => (
                  <ContactLink
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon />
                    {label}
                  </ContactLink>
                ))}
              </ContactActions>
            </ContactGrid>
          </ContactCard>

          <Footer>
            <div>
              <FooterName>Eduardo Okubo</FooterName>
              <FooterRole>Full Stack Developer / backend-first</FooterRole>
              <FooterMeta>
                Copyright {currentYear} Eduardo Okubo. Feito com foco em clareza,
                estrutura e boa manutenção.
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
