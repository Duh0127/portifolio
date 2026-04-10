import { heroSummary } from '../../../content'
import { HeroSummaryItem, HeroSummaryLabel, HeroSummaryList, HeroSummaryValue } from '../../../styles'
import { reveal } from '../../../utils/motion'

type HeroSummaryListProps = {
  reducedMotion: boolean
}

export default function HeroSummaryMetrics({
  reducedMotion,
}: HeroSummaryListProps) {
  return (
    <HeroSummaryList>
      {heroSummary.map((item, index) => (
        <HeroSummaryItem
          key={item.label}
          {...reveal(reducedMotion, 0.18 + index * 0.05)}
        >
          <HeroSummaryLabel>{item.label}</HeroSummaryLabel>
          <HeroSummaryValue>{item.value}</HeroSummaryValue>
        </HeroSummaryItem>
      ))}
    </HeroSummaryList>
  )
}
