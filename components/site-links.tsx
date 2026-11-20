import { site } from '@/lib/site'

export function ContactLinks() {
  return (
    <ul className="contact-links">
      <li><a href={site.github} data-event="github_click">GitHub</a></li>
      <li><a href={site.linkedin} data-event="social_click" data-label="LinkedIn">LinkedIn</a></li>
      <li><a href={`mailto:${site.email}`} data-event="email_click">Email</a></li>
    </ul>
  )
}
