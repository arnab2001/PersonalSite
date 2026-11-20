export function JsonLd({ value }: { value: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(value).replace(/</g, '\\u003c')
    }} />
  )
}
