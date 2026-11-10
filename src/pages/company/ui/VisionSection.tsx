import { images } from '@/shared/assets'
import { Eyebrow, Heading, ParallaxImage, Reveal, Section } from '@/shared/ui'

export function VisionSection() {
  return (
    <Section aria-labelledby="vision-title">
      <Reveal className="flex max-w-2xl flex-col gap-5">
        <Eyebrow>Our Vision</Eyebrow>
        <Heading id="vision-title" size="lg">
          We want to get local identification in every corner of the world in this era of global citizenship.
        </Heading>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Through True Rich Attended does no end it his mother since real had half every him case in packages
          enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <ParallaxImage
          src={images.officeLounge}
          alt="Open office lounge with a ping-pong table and a staircase"
          className="aspect-[16/7] sm:aspect-[1270/364]"
        />
      </Reveal>
    </Section>
  )
}
