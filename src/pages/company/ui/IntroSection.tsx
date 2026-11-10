import { Eyebrow, Heading, PixelMark, PixelSquare, Reveal, Section } from '@/shared/ui'
import { OfficeGallery } from '@/widgets/office-gallery'

export function IntroSection() {
  return (
    <Section aria-labelledby="company-title" className="pb-0 lg:pb-0">
      <div className="flex items-start justify-between gap-8">
        <Reveal className="flex max-w-2xl flex-col items-start gap-5">
          <PixelSquare />
          <Eyebrow>Company</Eyebrow>
          <Heading as="h1" id="company-title" size="xl">
            Award-winning Company seen and used by millions around the world.
          </Heading>
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The Maker is a decentralized.
          </p>
        </Reveal>
        <PixelMark className="hidden size-6 shrink-0 lg:grid" />
      </div>

      <OfficeGallery accent="top" className="mt-14" />
    </Section>
  )
}
