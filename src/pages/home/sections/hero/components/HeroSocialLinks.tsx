import { socialLinks } from '../../../content'
import { SocialInlineLink, SocialInlineList } from '../../../styles'

export default function HeroSocialLinks() {
  return (
    <SocialInlineList>
      {socialLinks.map(({ label, href, Icon }) => (
        <SocialInlineLink
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon />
          {label}
        </SocialInlineLink>
      ))}
    </SocialInlineList>
  )
}
