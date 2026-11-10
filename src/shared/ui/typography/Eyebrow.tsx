import type { ComponentProps } from 'react'

import { cn } from '@/shared/lib'

const tones = {
  dark: 'text-ink',
  light: 'text-white',
} as const

type EyebrowProps = ComponentProps<'p'> & { tone?: keyof typeof tones }

/** Small uppercase label above a section title ("OUR EXPERTISE"). */
export function Eyebrow({ tone = 'dark', className, ...rest }: EyebrowProps) {
  return (
    <p
      className={cn('text-xs font-medium uppercase tracking-[0.25em]', tones[tone], className)}
      {...rest}
    />
  )
}
