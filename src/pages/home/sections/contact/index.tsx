import {
  ContactCard,
  ContactGrid,
  ContactText,
  ContactTitle,
  Section,
  SectionEyebrow,
  SectionInner,
} from '../../styles'
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
  return (
    <Section id="contato">
      <SectionInner>
        <ContactCard {...reveal(reducedMotion)}>
          <ContactGrid>
            <div>
              <SectionEyebrow>Contato</SectionEyebrow>
              <ContactTitle>
                Se você tem interesse, uma ideia de projeto ou acredita que eu
                posso contribuir no que está construindo, me chame.
              </ContactTitle>
              <ContactText>
                Podemos conversar com calma sobre backend, arquitetura,
                integrações, dados, fluxos com IA e também sobre a interface
                quando a entrega pede uma solução mais completa, clara e bem
                amarrada.
              </ContactText>
            </div>

            <ContactLinks />
          </ContactGrid>
        </ContactCard>

        <HomeFooter currentYear={currentYear} />
      </SectionInner>
    </Section>
  )
}
