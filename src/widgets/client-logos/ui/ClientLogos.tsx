import { cn } from '@/shared/lib'
import { List, Stagger, StaggerItem } from '@/shared/ui'

import { CLIENTS } from '../model/clients'
import { LogoIpsum } from './LogoIpsum'

const tones = {
  dark: 'text-white/50',
  light: 'text-ink',
} as const

type ClientLogosProps = {
  /** `dark` — for dark backgrounds (hero), `light` — for light ones. */
  tone?: keyof typeof tones
  withLabel?: boolean
  className?: string
}

export function ClientLogos({ tone = 'light', withLabel = false, className }: ClientLogosProps) {
  return (
    <div className={cn('flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16', tones[tone], className)}>
      {withLabel && (
        <div className="shrink-0">
          <p className="text-xs text-white/50">Our Clients</p>
          <p className="text-base font-medium text-white">We’ve Worked with</p>
        </div>
      )}
      <Stagger interval={0.08} className="flex-1">
        <List
          items={CLIENTS}
          getKey={(client) => client.id}
          className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6"
          renderItem={(client) => (
            <StaggerItem>
              <LogoIpsum glyph={client.glyph} />
            </StaggerItem>
          )}
        />
      </Stagger>
    </div>
  )
}
