import { approachItems } from '../../../content'
import { useT } from '../../../../../i18n'
import {
  ApproachItem,
  ApproachItemText,
  ApproachItemTitle,
  ApproachList,
  ApproachNumber,
} from '../../../styles'
import { reveal } from '../../../utils/motion'

type ApproachItemsListProps = {
  reducedMotion: boolean
}

export default function ApproachItemsList({
  reducedMotion,
}: ApproachItemsListProps) {
  const labels = useT().soft.items
  return (
    <ApproachList>
      {approachItems.map((item, index) => (
        <ApproachItem
          key={item.number}
          {...reveal(reducedMotion, 0.08 + index * 0.05)}
          whileHover={reducedMotion ? undefined : { x: 4 }}
        >
          <ApproachNumber>{item.number}</ApproachNumber>
          <div>
            <ApproachItemTitle>{labels[index].title}</ApproachItemTitle>
            <ApproachItemText>{labels[index].text}</ApproachItemText>
          </div>
        </ApproachItem>
      ))}
    </ApproachList>
  )
}
