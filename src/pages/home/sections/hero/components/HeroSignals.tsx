import { useT } from '../../../../../i18n'
import { HeroSignalItem, HeroSignalList } from '../../../styles'
import { reveal } from '../../../utils/motion'

type HeroSignalsProps = {
  reducedMotion: boolean
}

export default function HeroSignals({ reducedMotion }: HeroSignalsProps) {
  const heroSignals = useT().hero.signals
  return (
    <HeroSignalList>
      {heroSignals.map((signal, index) => (
        <HeroSignalItem
          key={index}
          {...reveal(reducedMotion, 0.05 + index * 0.04)}
        >
          {signal}
        </HeroSignalItem>
      ))}
    </HeroSignalList>
  )
}
