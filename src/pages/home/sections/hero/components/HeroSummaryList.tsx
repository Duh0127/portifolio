import { useT } from '../../../../../i18n'
import { HeroSummaryItem, HeroSummaryLabel, HeroSummaryList, HeroSummaryValue } from '../../../styles'
import { reveal } from '../../../utils/motion'

type HeroSummaryListProps = {
  reducedMotion: boolean
}

export default function HeroSummaryMetrics({
  reducedMotion,
}: HeroSummaryListProps) {
  const heroSummary = useT().hero.summary
  return (
    <HeroSummaryList>
      {heroSummary.map((item, index) => (
        <HeroSummaryItem
          key={index}
          {...reveal(reducedMotion, 0.18 + index * 0.05)}
        >
          <HeroSummaryLabel>{item.label}</HeroSummaryLabel>
          <HeroSummaryValue>{item.value}</HeroSummaryValue>
        </HeroSummaryItem>
      ))}
    </HeroSummaryList>
  )
}
