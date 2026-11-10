import { SubscribeForm } from '@/features/subscribe-newsletter'
import { cn } from '@/shared/lib'
import { AccentBar, Container, Eyebrow, Heading, PixelCorner, Reveal } from '@/shared/ui'

export function Newsletter({ className }: { className?: string }) {
  return (
    <section aria-labelledby="newsletter-title" className={cn('py-16 lg:py-24', className)}>
      <Container>
        <Reveal className="relative grid items-center gap-10 overflow-hidden bg-brand px-8 py-16 sm:px-12 lg:grid-cols-2 lg:px-20 lg:py-20">
          <PixelCorner className="size-[70px]" />
          <AccentBar reverse orientation="vertical" className="absolute inset-y-0 right-0 w-3" />

          <div className="flex flex-col gap-4">
            <Eyebrow tone="light">Newsletter</Eyebrow>
            <Heading id="newsletter-title" size="md" tone="light" className="leading-relaxed">
              Subscribe our News Letter
              <br />
              to get Latest Updates.
            </Heading>
          </div>

          <div className="lg:pr-8">
            <SubscribeForm />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
