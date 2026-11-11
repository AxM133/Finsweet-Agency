import type { ReactNode } from 'react'

import { SITE } from '@/shared/config'
import { AccentBar, Reveal, SocialLinks } from '@/shared/ui'

function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="border-b border-white/20 pb-3 text-sm text-white/60">{label}</p>
      <div className="flex flex-col gap-1 text-lg leading-snug text-white sm:text-xl">{children}</div>
    </div>
  )
}

export function ContactInfo() {
  const { address, workingHours, phone, email } = SITE

  return (
    <Reveal direction="left" className="relative">
      <div aria-hidden="true" className="absolute -top-5 right-0 flex h-5">
        <span className="w-10 bg-peach" />
        <span className="w-10 bg-white/40" />
        <span className="w-16 bg-orange" />
      </div>
      <AccentBar reverse orientation="vertical" className="absolute top-1/3 bottom-0 -left-4 hidden w-4 lg:flex" />

      <div className="flex flex-col gap-10 bg-brand p-8 sm:p-12 lg:p-20">
        <InfoRow label="Location">
          <p>{address}</p>
        </InfoRow>
        <InfoRow label="Working Hour">
          <p>{workingHours.days}</p>
          <p>{workingHours.time}</p>
          <p className="text-sm text-white/60">{workingHours.note}</p>
        </InfoRow>
        <InfoRow label="Contact Us">
          <a href={`tel:${phone.replaceAll(' ', '')}`} className="hover:underline">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="text-sm text-white/60 hover:text-white">
            {email}
          </a>
        </InfoRow>
        <SocialLinks className="text-white" />
      </div>
    </Reveal>
  )
}
