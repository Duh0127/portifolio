import { Tilt } from '../../../../../components/fx'
import { useT } from '../../../../../i18n'
import type { ProjectEntry } from '../data'
import {
  Badge,
  BadgeGroup,
  BadgeGroupLabel,
  BadgeList,
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
  ProjectTag,
  SectionDescription,
} from '../styles'
import { reveal } from '../../../utils/motion'

type ProjectCaseCardProps = {
  index: number
  project: ProjectEntry
  reducedMotion: boolean
}

export default function ProjectCaseCard({
  index,
  project,
  reducedMotion,
}: ProjectCaseCardProps) {
  const t = useT().projects
  const copy = t.items[index]
  const projectNumber = String(index + 1).padStart(2, '0')
  const isReverse = index % 2 === 1

  return (
    <Tilt max={3}>
    <ProjectCard
      $reverse={isReverse}
      {...reveal(reducedMotion, 0.08 + index * 0.08)}
    >
      <ProjectRail $reverse={isReverse}>
        <ProjectRailMeta>
          <ProjectTag>{projectNumber}</ProjectTag>
          <ProjectTag>{copy.category}</ProjectTag>
        </ProjectRailMeta>

        <ProjectOfficialText>
          <strong>{t.repoLabel}</strong> {copy.official}
        </ProjectOfficialText>

        <ProjectLink
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.99 }}
        >
          {t.openRepo}
        </ProjectLink>
      </ProjectRail>

      <ProjectMain $reverse={isReverse}>
        <ProjectName>{project.name}</ProjectName>
        <ProjectSummary>{copy.summary}</ProjectSummary>

        <ProjectHighlights>
          <ProjectColumn>
            <ProjectColumnLabel>{t.significanceLabel}</ProjectColumnLabel>
            <SectionDescription as="p">{copy.significance}</SectionDescription>
          </ProjectColumn>

          <ProjectColumn>
            <ProjectColumnLabel>{t.highlightsLabel}</ProjectColumnLabel>
            <ProjectBulletList>
              {copy.highlights.map((highlight) => (
                <ProjectBullet key={highlight}>{highlight}</ProjectBullet>
              ))}
            </ProjectBulletList>
          </ProjectColumn>
        </ProjectHighlights>

        <ProjectHighlights>
          <BadgeGroup>
            <BadgeGroupLabel>{t.stackLabel}</BadgeGroupLabel>
            <BadgeList>
              {project.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </BadgeList>
          </BadgeGroup>

          <BadgeGroup>
            <BadgeGroupLabel>{t.conceptsLabel}</BadgeGroupLabel>
            <BadgeList>
              {copy.concepts.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </BadgeList>
          </BadgeGroup>
        </ProjectHighlights>
      </ProjectMain>
    </ProjectCard>
    </Tilt>
  )
}
