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
    label: 'Selecao',
    value: `${projects.length} projetos publicados`,
    text: 'Um recorte enxuto do que melhor representa meu jeito de construir.',
  },
  {
    label: 'Recorte tecnico',
    value: 'NestJS + IA full stack',
    text: 'Backend como base, com frontend entrando quando a experiencia pede.',
  },
  {
    label: 'Criterio',
    value: 'Resumo apoiado no codigo',
    text: 'Usei a descricao dos repositorios e a estrutura real de cada projeto.',
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
          Casos publicados que deixam meu foco em backend visivel na pratica.
        </SectionTitle>
        <SectionDescription>
          Preferi reunir poucos projetos com mais criterio, em vez de uma
          vitrine longa e superficial.
        </SectionDescription>
        <HeroBody>
          Cada resumo abaixo parte da descricao publica do repositorio e do que
          o codigo entrega de fato. A ideia aqui e facilitar a leitura para
          quem quiser entender rapido como penso estrutura, integracao e
          experiencia de uso.
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
          <SectionEyebrow>Leitura da secao</SectionEyebrow>
          <OverviewTitle>Menos vitrine, mais contexto tecnico.</OverviewTitle>
          <OverviewText>
            Prefiro apresentar poucos projetos com mais criterio do que uma
            sequencia longa de blocos superficiais. O objetivo aqui e mostrar
            intencao de produto, organizacao de codigo e decisoes que fazem
            sentido para manutencao.
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
