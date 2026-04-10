import { heroSignals } from '../../../content'
import { HeroSignalItem, HeroSignalList } from '../../../styles'
import { reveal } from '../../../utils/motion'

type HeroSignalsProps = {
  reducedMotion: boolean
}

export default function HeroSignals({ reducedMotion }: HeroSignalsProps) {
  return (
    <HeroSignalList>
      {heroSignals.map((signal, index) => (
        <HeroSignalItem
          key={signal}
          {...reveal(reducedMotion, 0.05 + index * 0.04)}
        >
          {signal}
        </HeroSignalItem>
      ))}
    </HeroSignalList>
  )
}
