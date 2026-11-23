import {
  ContactCard,
  ContactGrid,
  ContactText,
  ContactTitle,
  Section,
  SectionEyebrow,
  SectionInner,
} from '../../styles'
import { useT } from '../../../../i18n'
import { reveal } from '../../utils/motion'
import ContactLinks from './components/ContactLinks'
import HomeFooter from './components/HomeFooter'

type ContactSectionProps = {
  currentYear: number
  reducedMotion: boolean
}

export default function ContactSection({
  currentYear,
  reducedMotion,
}: ContactSectionProps) {
  const t = useT().contact
  return (
    <Section id="contato">
      <SectionInner>
        <ContactCard {...reveal(reducedMotion)}>
          <ContactGrid>
            <div>
              <SectionEyebrow>{t.eyebrow}</SectionEyebrow>
              <ContactTitle>{t.title}</ContactTitle>
              <ContactText>{t.text}</ContactText>
            </div>

            <ContactLinks />
          </ContactGrid>
        </ContactCard>

        <HomeFooter currentYear={currentYear} />
      </SectionInner>
    </Section>
  )
}
