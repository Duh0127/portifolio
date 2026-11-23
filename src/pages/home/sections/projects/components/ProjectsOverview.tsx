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
import { useT } from '../../../../../i18n'
import { socialLinks } from '../../../content'
import { hoverLift, reveal } from '../../../utils/motion'

type ProjectsOverviewProps = {
  reducedMotion: boolean
}

export default function ProjectsOverview({
  reducedMotion,
}: ProjectsOverviewProps) {
  const t = useT().projects
  const overviewItems = t.overview.map((item) => ({ ...item, value: item.value.replace('{n}', String(projects.length)) }))
  const githubLink =
    socialLinks.find(({ label }) => label === 'GitHub')?.href ?? '#'

  return (
    <ProjectsIntroLayout>
      <motion.div {...reveal(reducedMotion)}>
        <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
        <SectionTitle>{t.title}</SectionTitle>
        <SectionDescription>{t.description}</SectionDescription>
        <HeroBody>{t.body}</HeroBody>

        <HeroActions>
          <PrimaryAction
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.primary}
          </PrimaryAction>

          <SecondaryAction
            href="/#contato"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.secondary}
          </SecondaryAction>
        </HeroActions>
      </motion.div>

      <HeroAside {...reveal(reducedMotion, 0.12)}>
        <OverviewCard whileHover={hoverLift(reducedMotion)}>
          <SectionEyebrow>{t.overviewEyebrow}</SectionEyebrow>
          <OverviewTitle>{t.overviewTitle}</OverviewTitle>
          <OverviewText>{t.overviewText}</OverviewText>
        </OverviewCard>

        <OverviewCard whileHover={hoverLift(reducedMotion)}>
          <OverviewList>
            {overviewItems.map((item, index) => (
              <OverviewItem
                key={index}
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
