import { approachItems } from '../../../content'
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
            <ApproachItemTitle>{item.title}</ApproachItemTitle>
            <ApproachItemText>{item.text}</ApproachItemText>
          </div>
        </ApproachItem>
      ))}
    </ApproachList>
  )
}
