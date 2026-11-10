import { cn } from '@/shared/lib'

const tones = {
  dark: 'text-ink',
  light: 'text-white',
} as const

type LogoProps = {
  tone?: keyof typeof tones
  className?: string
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <span className={cn('text-2xl font-semibold tracking-tight', tones[tone], className)}>
      {'{'}Finsweet
    </span>
  )
}
