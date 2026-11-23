import { Section, SectionInner, StackBoard } from '../../styles'
import { useT } from '../../../../i18n'
import { reveal } from '../../utils/motion'
import SectionIntro from '../shared/SectionIntro'
import StackRowsList from './components/StackRowsList'

type StackSectionProps = {
  reducedMotion: boolean
}

export default function StackSection({
  reducedMotion,
}: StackSectionProps) {
  const t = useT().stack
  return (
    <Section id="stacks">
      <SectionInner>
        <StackBoard {...reveal(reducedMotion)}>
          <SectionIntro
            eyebrow={t.eyebrow}
            title={t.title}
            description={t.description}
            reducedMotion={reducedMotion}
          />

          <StackRowsList reducedMotion={reducedMotion} />
        </StackBoard>
      </SectionInner>
    </Section>
  )
}
