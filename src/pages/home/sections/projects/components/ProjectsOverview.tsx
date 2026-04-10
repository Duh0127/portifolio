import { motion } from 'motion/react'

import { projects } from '../data'
import {
  HeroActions,
  HeroAside,
  HeroBody,
  OverviewCard,
  OverviewItem,
  OverviewItemLabel,
  OverviewItemText,
  OverviewItemValue,
  OverviewList,
  OverviewText,
  OverviewTitle,
  PrimaryAction,
  ProjectsIntroLayout,
  SectionDescription,
  SectionEyebrow,
  SectionTitle,
  SecondaryAction,
} from '../styles'
import { socialLinks } from '../../../content'
import { hoverLift, reveal } from '../../../utils/motion'

type ProjectsOverviewProps = {
  reducedMotion: boolean
}

const overviewItems = [
  {
    label: 'Seleção',
    value: `${projects.length} projetos publicados`,
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

export default function ProjectsOverview({
  reducedMotion,
}: ProjectsOverviewProps) {
  const githubLink =
    socialLinks.find(({ label }) => label === 'GitHub')?.href ?? '#'

  return (
    <ProjectsIntroLayout>
      <motion.div {...reveal(reducedMotion)}>
        <SectionEyebrow>Projetos</SectionEyebrow>
        <SectionTitle>
          Casos publicados que deixam meu foco em backend visível na prática.
        </SectionTitle>
        <SectionDescription>
          Preferi reunir poucos projetos com mais critério, em vez de uma
          vitrine longa e superficial.
        </SectionDescription>
        <HeroBody>
          Cada resumo abaixo parte da descrição pública do repositório e do que
          o código entrega de fato. A ideia aqui é facilitar a leitura para
          quem quiser entender rápido como penso estrutura, integração e
          experiência de uso.
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
            href="/#contato"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Conversar sobre um projeto
          </SecondaryAction>
        </HeroActions>
      </motion.div>

      <HeroAside {...reveal(reducedMotion, 0.12)}>
        <OverviewCard whileHover={hoverLift(reducedMotion)}>
          <SectionEyebrow>Leitura da seção</SectionEyebrow>
          <OverviewTitle>Menos vitrine, mais contexto técnico.</OverviewTitle>
          <OverviewText>
            Prefiro apresentar poucos projetos com mais critério do que uma
            sequência longa de blocos superficiais. O objetivo aqui é mostrar
            intenção de produto, organização de código e decisões que fazem
            sentido para manutenção.
          </OverviewText>
        </OverviewCard>

        <OverviewCard whileHover={hoverLift(reducedMotion)}>
          <OverviewList>
            {overviewItems.map((item, index) => (
              <OverviewItem
                key={item.label}
                {...reveal(reducedMotion, 0.18 + index * 0.05)}
              >
                <OverviewItemLabel>{item.label}</OverviewItemLabel>
                <OverviewItemValue>{item.value}</OverviewItemValue>
                <OverviewItemText>{item.text}</OverviewItemText>
              </OverviewItem>
            ))}
          </OverviewList>
        </OverviewCard>
      </HeroAside>
    </ProjectsIntroLayout>
  )
}
