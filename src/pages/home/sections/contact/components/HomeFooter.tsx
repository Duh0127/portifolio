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
  return (
    <Footer>
      <div>
        <FooterName>Eduardo Okubo</FooterName>
        <FooterRole>Full Stack Developer / backend-first</FooterRole>
        <FooterMeta>
          Copyright {currentYear} Eduardo Okubo. Feito com foco em clareza,
          estrutura e boa manutenção.
        </FooterMeta>
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
