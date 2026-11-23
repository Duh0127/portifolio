import { useT } from '../../../../../i18n'
import { socialLinks } from '../../../content'
import {
  Footer,
  FooterLink,
  FooterLinks,
  FooterMeta,
  FooterName,
  FooterRole,
} from '../../../styles'

type HomeFooterProps = {
  currentYear: number
}

export default function HomeFooter({ currentYear }: HomeFooterProps) {
  const t = useT()
  return (
    <Footer>
      <div>
        <FooterName>Eduardo Okubo</FooterName>
        <FooterRole>{t.hero.portraitRole}</FooterRole>
        <FooterMeta>{t.contact.footer.replace('{year}', String(currentYear))}</FooterMeta>
      </div>

      <FooterLinks>
        {socialLinks.map(({ label, href }) => (
          <FooterLink key={label} href={href} target="_blank" rel="noreferrer">
            {label}
          </FooterLink>
        ))}
      </FooterLinks>
    </Footer>
  )
}
