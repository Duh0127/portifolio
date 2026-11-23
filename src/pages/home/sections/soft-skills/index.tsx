import {
  ApproachBody,
  ApproachIntro,
  ApproachLayout,
  ApproachLead,
  ApproachNote,
  Section,
  SectionEyebrow,
  SectionInner,
} from '../../styles'
import { useT } from '../../../../i18n'
import { reveal } from '../../utils/motion'
import ApproachItemsList from './components/ApproachItemsList'

type SoftSkillsSectionProps = {
  reducedMotion: boolean
}

export default function SoftSkillsSection({
  reducedMotion,
}: SoftSkillsSectionProps) {
  const t = useT().soft
  return (
    <Section id="soft-skills">
      <SectionInner>
        <ApproachLayout>
          <ApproachIntro {...reveal(reducedMotion)}>
            <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
            <ApproachLead>{t.lead}</ApproachLead>
            <ApproachBody>{t.body}</ApproachBody>
            <ApproachNote>{t.note}</ApproachNote>
          </ApproachIntro>

          <ApproachItemsList reducedMotion={reducedMotion} />
        </ApproachLayout>
      </SectionInner>
    </Section>
  )
}
