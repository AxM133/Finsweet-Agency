import { ContactForm } from '@/features/send-message'
import { Eyebrow, Heading, PixelSquare, Reveal, Section } from '@/shared/ui'

import { ContactInfo } from './ContactInfo'
import { ContactMap } from './ContactMap'

export function ContactPage() {
  return (
    <>
      <Section aria-labelledby="contact-title" containerClassName="grid items-start gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <Reveal className="flex flex-col items-start gap-6">
          <PixelSquare />
          <Eyebrow>Contact Us</Eyebrow>
          <Heading as="h1" id="contact-title" size="xl">
            Have a Question ?
            <br />
            Let’s Get in Touch with us{' '}
            <span aria-hidden="true" className="inline-block origin-[70%_70%] animate-wave">
              👋
            </span>
          </Heading>
          <p className="text-sm text-muted sm:text-base">Fill up the Form and our team will get back to you within 24 hrs</p>
          <div className="mt-6 w-full">
            <ContactForm />
          </div>
        </Reveal>

        <ContactInfo />
      </Section>

      <ContactMap />
    </>
  )
}
