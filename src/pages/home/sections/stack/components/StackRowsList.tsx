import { stackGroups } from '../../../content'
import { useT } from '../../../../../i18n'
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
  const labels = useT().stack.groups
  return (
    <StackRows>
      {stackGroups.map((group, index) => (
        <StackRow
          key={group.index}
          {...reveal(reducedMotion, 0.08 + index * 0.04)}
          whileHover={reducedMotion ? undefined : { x: 4 }}
        >
          <StackIndex>{group.index}</StackIndex>
          <StackName>{labels[index].name}</StackName>
          <StackDescriptionText>{labels[index].description}</StackDescriptionText>
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
