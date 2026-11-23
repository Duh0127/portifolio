import {
  AboutBodyColumn,
  AboutIntro,
  AboutLayout,
  AboutNote,
  AboutParagraph,
  AboutTextBlock,
  Section,
  SectionInner,
} from '../../styles'
import { useT } from '../../../../i18n'
import { reveal } from '../../utils/motion'
import SectionIntro from '../shared/SectionIntro'
import AboutAreas from './components/AboutAreasList'

type AboutSectionProps = {
  reducedMotion: boolean
}

export default function AboutSection({
  reducedMotion,
}: AboutSectionProps) {
  const t = useT().about
  return (
    <Section id="sobre">
      <SectionInner>
        <AboutLayout>
          <AboutIntro>
            <SectionIntro
              eyebrow={t.eyebrow}
              title={t.title}
              description={t.description}
              reducedMotion={reducedMotion}
            />
          </AboutIntro>

          <AboutBodyColumn>
            <AboutTextBlock {...reveal(reducedMotion, 0.06)}>
              <AboutParagraph>{t.p1}</AboutParagraph>
              <AboutParagraph>{t.p2}</AboutParagraph>
            </AboutTextBlock>

            <AboutNote {...reveal(reducedMotion, 0.1)}>{t.note}</AboutNote>

            <AboutAreas reducedMotion={reducedMotion} />
          </AboutBodyColumn>
        </AboutLayout>
      </SectionInner>
    </Section>
  )
}
