import { stackGroups } from '../../../content'
import {
  StackDescriptionText,
  StackIndex,
  StackName,
  StackRow,
  StackRows,
  StackTech,
  StackTechList,
} from '../../../styles'
import { reveal } from '../../../utils/motion'

type StackRowsListProps = {
  reducedMotion: boolean
}

export default function StackRowsList({
  reducedMotion,
}: StackRowsListProps) {
  return (
    <StackRows>
      {stackGroups.map((group, index) => (
        <StackRow
          key={group.name}
          {...reveal(reducedMotion, 0.08 + index * 0.04)}
          whileHover={reducedMotion ? undefined : { x: 4 }}
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
  )
}
