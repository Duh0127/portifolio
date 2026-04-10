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
import { hoverLift, reveal } from '../../../utils/motion'

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
  const projectNumber = String(index + 1).padStart(2, '0')
  const isReverse = index % 2 === 1

  return (
    <ProjectCard
      $reverse={isReverse}
      {...reveal(reducedMotion, 0.08 + index * 0.08)}
      whileHover={hoverLift(reducedMotion)}
    >
      <ProjectRail $reverse={isReverse}>
        <ProjectRailMeta>
          <ProjectTag>{projectNumber}</ProjectTag>
          <ProjectTag>{project.category}</ProjectTag>
        </ProjectRailMeta>

        <ProjectOfficialText>
          <strong>Descricao do repositorio:</strong> {project.officialDescription}
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
            <SectionDescription as="p">{project.significance}</SectionDescription>
          </ProjectColumn>

          <ProjectColumn>
            <ProjectColumnLabel>
              Pontos mais visiveis na implementacao
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
}
