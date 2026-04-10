import { SectionDescription, SectionEyebrow, SectionHeading, SectionTitle } from '../../styles'
import { reveal } from '../../utils/motion'

type SectionIntroProps = {
  align?: 'left' | 'center'
  description: string
  delay?: number
  reducedMotion: boolean
  title: string
  eyebrow: string
}

export default function SectionIntro({
  align = 'left',
  description,
  delay = 0,
  reducedMotion,
  title,
  eyebrow,
}: SectionIntroProps) {
  return (
    <SectionHeading $align={align} {...reveal(reducedMotion, delay)}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </SectionHeading>
  )
}
