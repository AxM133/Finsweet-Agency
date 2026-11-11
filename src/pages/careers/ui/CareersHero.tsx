import { motion } from 'motion/react'

import { images } from '@/shared/assets'
import { EASE, Eyebrow, Heading, PixelMark, Section } from '@/shared/ui'

export function CareersHero() {
  return (
    <Section aria-labelledby="careers-title" className="pb-0 lg:pb-0">
      <div className="relative flex flex-col items-center gap-6 text-center">
        <PixelMark className="absolute top-0 right-0 hidden size-6 lg:grid" />
        <Eyebrow>Career at Finsweet</Eyebrow>
        <Heading as="h1" id="careers-title" size="lg" className="max-w-xl">
          We hired people who are Always Passionate about what they do
        </Heading>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Through True Rich Attended does no end it his mother since real had half every him case in packages
          enquire we up ecstatic unsatiable saw.
        </p>
      </div>

      {/* Decorative word: the real heading is the h1 above */}
      <motion.div
        aria-hidden="true"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
        className="mt-12 bg-cover bg-center bg-clip-text text-center leading-[0.95] font-extrabold tracking-tight text-transparent select-none"
        style={{ backgroundImage: `url(${images.careersLetters})`, fontSize: 'clamp(4.5rem, 21vw, 17rem)' }}
      >
        Careers
      </motion.div>

      <div className="mt-10 flex flex-col items-center gap-3 text-sm text-ink">
        <p>See Our open positions</p>
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          👇
        </motion.span>
      </div>
    </Section>
  )
}
