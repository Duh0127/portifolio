import { Section, SectionInner, StackBoard } from '../../styles'
import { reveal } from '../../utils/motion'
import SectionIntro from '../shared/SectionIntro'
import StackRowsList from './components/StackRowsList'

type StackSectionProps = {
  reducedMotion: boolean
}

export default function StackSection({
  reducedMotion,
}: StackSectionProps) {
  return (
    <Section id="stacks">
      <SectionInner>
        <StackBoard {...reveal(reducedMotion)}>
          <SectionIntro
            eyebrow="Stack"
            title="Tecnologia escolhida pelo problema, não pelo hype."
            description="Estas são as combinações que mais uso no dia a dia. Em vez de espalhar badges, prefiro mostrar como cada parte entra quando o produto pede estrutura, integração e manutenção."
            reducedMotion={reducedMotion}
          />

          <StackRowsList reducedMotion={reducedMotion} />
        </StackBoard>
      </SectionInner>
    </Section>
  )
}
