import { useT } from '../../../../../i18n'
import { AboutAreaItem, AboutAreaText, AboutAreasList, AboutAreaTitle } from '../../../styles'
import { reveal } from '../../../utils/motion'

type AboutAreasListProps = {
  reducedMotion: boolean
}

export default function AboutAreas({
  reducedMotion,
}: AboutAreasListProps) {
  const aboutAreas = useT().about.areas
  return (
    <AboutAreasList>
      {aboutAreas.map((item, index) => (
        <AboutAreaItem
          key={index}
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
