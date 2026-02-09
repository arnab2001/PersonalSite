import { generatePersonJsonLd, generateWebsiteJsonLd } from '@/components/seo/metadata'

export default function Head() {
  const websiteJsonLd = generateWebsiteJsonLd()
  const personJsonLd = generatePersonJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  )
}
