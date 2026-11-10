import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { LuQuote } from 'react-icons/lu'

import { testimonialQueries, TestimonialCard, TestimonialSkeleton } from '@/entities/testimonial'
import type { Testimonial } from '@/entities/testimonial'
import { images } from '@/shared/assets'
import { cn } from '@/shared/lib'
import { AccentBar, Avatar, Card, Heading, PixelSquare, QueryState, Reveal, Section } from '@/shared/ui'

const AUTOPLAY_MS = 6000

function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reduceMotion = useReducedMotion()
  const current = items[index]

  useEffect(() => {
    if (isPaused || reduceMotion || items.length < 2) return
    const timer = setInterval(() => setIndex((value) => (value + 1) % items.length), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [isPaused, reduceMotion, items.length, index])

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Card className="relative p-8 pl-10 sm:p-12 sm:pl-16">
        <AccentBar reverse orientation="vertical" className="absolute inset-y-0 left-0 w-2" />
        <LuQuote aria-hidden="true" className="absolute top-8 right-8 size-10 rotate-180 text-ink" />

        <div aria-live="polite" className="min-h-60">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="pt-10"
            >
              <TestimonialCard testimonial={current} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Card>

      <div role="group" aria-label="Choose testimonial" className="mt-8 flex justify-center gap-2">
        {items.map((item, itemIndex) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show testimonial from ${item.author.name}`}
            aria-current={itemIndex === index}
            onClick={() => setIndex(itemIndex)}
            className={cn(
              'h-2 cursor-pointer rounded-full transition-all duration-300',
              itemIndex === index ? 'w-6 bg-ink' : 'w-2 bg-line hover:bg-muted',
            )}
          />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const query = useQuery(testimonialQueries.all())

  return (
    <Section
      id="testimonials"
      tone="lavender"
      aria-labelledby="testimonials-title"
      containerClassName="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"
    >
      <Reveal className="flex max-w-md flex-col items-start gap-5">
        <PixelSquare tone="brand" className="size-3" />
        <Heading id="testimonials-title" size="lg">
          Our customers love what we do
        </Heading>
        <p className="text-base font-medium text-ink">Transform your idea into reality with finsweet</p>
        <p className="text-sm leading-relaxed text-muted">
          It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[images.avatar1, images.avatar2, images.avatar3].map((src, i) => (
              <Avatar key={src} src={src} name={`Customer ${i + 1}`} size="md" className="ring-2 ring-lavender" />
            ))}
          </div>
          <p className="text-sm text-ink">
            <span className="font-semibold">30+</span> Customer Reviews
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15} direction="left">
        <QueryState query={query} skeleton={<TestimonialSkeleton />}>
          {(items) => <TestimonialSlider items={items} />}
        </QueryState>
      </Reveal>
    </Section>
  )
}
