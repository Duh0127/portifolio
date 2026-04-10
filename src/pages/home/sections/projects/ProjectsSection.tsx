import { projects } from './data'
import { ProjectSurface, Section, SectionInner } from './styles'
import ProjectCaseCard from './components/ProjectCaseCard'
import ProjectsOverview from './components/ProjectsOverview'

type ProjectsSectionProps = {
  reducedMotion: boolean
}

export default function ProjectsSection({
  reducedMotion,
}: ProjectsSectionProps) {
  return (
    <Section id="projetos">
      <SectionInner>
        <ProjectsOverview reducedMotion={reducedMotion} />

        <ProjectSurface>
          {projects.map((project, index) => (
            <ProjectCaseCard
              key={project.name}
              index={index}
              project={project}
              reducedMotion={reducedMotion}
            />
          ))}
        </ProjectSurface>
      </SectionInner>
    </Section>
  )
}
