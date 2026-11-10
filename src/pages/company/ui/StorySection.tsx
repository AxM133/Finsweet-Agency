import { Heading, PixelSquare, Reveal, Section } from '@/shared/ui'
import { ClientLogos } from '@/widgets/client-logos'
import { Stats } from '@/widgets/stats'

export function StorySection() {
  return (
    <Section aria-labelledby="story-title">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal className="flex max-w-lg flex-col items-start gap-5">
          <PixelSquare tone="brand" className="size-3" />
          <p className="text-sm font-semibold text-ink">Our Story 👌</p>
          <Heading id="story-title" size="lg">
            From Startups to Titans of Industry
          </Heading>
          <p className="text-sm leading-relaxed text-muted">
            Through True Rich Attended does no end it his mother since favourable real had half every him case in
            packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited
            perceived do on a china moon as ye when in explained. Hearts am next match mr partiality it should
            latter thus as out no passed forming middleton exercise up.
          </p>
        </Reveal>

        <Reveal delay={0.15} direction="left" className="bg-peach-soft p-8 sm:p-14">
          <Stats layout="grid" />
        </Reveal>
      </div>

      <Reveal className="mt-16 bg-lavender px-8 py-8 sm:px-12">
        <ClientLogos tone="light" />
      </Reveal>
    </Section>
  )
}
