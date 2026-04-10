import { aboutAreas } from '../../../content'
import { AboutAreaItem, AboutAreaText, AboutAreasList, AboutAreaTitle } from '../../../styles'
import { reveal } from '../../../utils/motion'

type AboutAreasListProps = {
  reducedMotion: boolean
}

export default function AboutAreas({
  reducedMotion,
}: AboutAreasListProps) {
  return (
    <AboutAreasList>
      {aboutAreas.map((item, index) => (
        <AboutAreaItem
          key={item.title}
          {...reveal(reducedMotion, 0.14 + index * 0.04)}
          whileHover={reducedMotion ? undefined : { x: 4 }}
        >
          <AboutAreaTitle>{item.title}</AboutAreaTitle>
          <AboutAreaText>{item.text}</AboutAreaText>
        </AboutAreaItem>
      ))}
    </AboutAreasList>
  )
}
