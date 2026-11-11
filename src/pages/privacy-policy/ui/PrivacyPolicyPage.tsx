import { formatLongDate } from '@/shared/lib'
import { AccentBar, Heading, PixelMark, PixelSquare, Reveal, RichContent, Section } from '@/shared/ui'

import { PRIVACY_CONTENT, PRIVACY_UPDATED_AT } from '../model/content'

export function PrivacyPolicyPage() {
  return (
    <Section aria-labelledby="privacy-title">
      <div className="flex items-start justify-between gap-8">
        <Reveal className="flex flex-col items-start gap-5">
          <PixelSquare />
          <Heading as="h1" id="privacy-title" size="xl">
            Privacy Policy
          </Heading>
          <p className="text-sm text-muted">Last Updated on {formatLongDate(PRIVACY_UPDATED_AT)}</p>
        </Reveal>
        <PixelMark className="hidden size-6 shrink-0 lg:grid" />
      </div>

      <Reveal className="mt-14">
        <div className="bg-mint px-6 py-12 sm:px-12 lg:px-0 lg:py-20">
          <RichContent blocks={PRIVACY_CONTENT} className="mx-auto max-w-3xl lg:px-6" />
        </div>
        <AccentBar className="h-5 w-48 sm:w-64" />
      </Reveal>
    </Section>
  )
}
