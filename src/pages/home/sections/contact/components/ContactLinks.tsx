import { socialLinks } from '../../../content'
import { ContactActions, ContactLink } from '../../../styles'

export default function ContactLinks() {
  return (
    <ContactActions>
      {socialLinks.map(({ label, href, Icon }) => (
        <ContactLink
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon />
          {label}
        </ContactLink>
      ))}
    </ContactActions>
  )
}
