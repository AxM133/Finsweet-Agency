import { motion } from 'motion/react'
import { Link } from 'react-router'

import { images } from '@/shared/assets'
import { ROUTES } from '@/shared/config'
import { AccentBar, Button, Container, EASE, Heading, PixelSquare, Stagger, StaggerItem } from '@/shared/ui'
import { ClientLogos } from '@/widgets/client-logos'

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-ink pt-16 lg:pt-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Stagger interval={0.14} className="flex flex-col items-start gap-6 lg:pr-10">
            <StaggerItem>
              <PixelSquare tone="ghost" />
            </StaggerItem>
            <StaggerItem>
              <Heading as="h1" size="display" tone="light">
                Transform Your Idea Into Reality with Finsweet
              </Heading>
            </StaggerItem>
            <StaggerItem>
              <p className="max-w-md text-base leading-relaxed text-white/60">
                The entire Finsweet team knows what’s good with Webflow and you can too with 1 week and a good
                attitude.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Button as={Link} to={ROUTES.contact} withArrow>
                Request Quote
              </Button>
            </StaggerItem>
          </Stagger>

          <div className="relative mx-auto w-full max-w-[34rem] lg:ml-auto">
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              className="overflow-hidden"
            >
              <motion.img
                src={images.heroTeam}
                alt="Finsweet team discussing a project around a table"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                className="block aspect-[517/525] w-full object-cover"
              />
            </motion.div>
            <AccentBar reverse orientation="vertical" className="absolute top-0 -right-4 h-3/4 w-4" />
            <motion.span
              aria-hidden="true"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 -left-4 size-4 bg-orange"
            />
          </div>
        </div>

        <ClientLogos tone="dark" withLabel className="mt-20 border-t border-white/10 py-10" />
      </Container>
    </section>
  )
}
