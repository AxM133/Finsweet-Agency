import { cn } from '@/shared/lib'

const tones = {
  peach: 'bg-peach',
  brand: 'bg-brand',
  ghost: 'bg-white/10',
} as const

type PixelSquareProps = {
  tone?: keyof typeof tones
  className?: string
}

/** Single square that sits above section eyebrows. */
export function PixelSquare({ tone = 'peach', className }: PixelSquareProps) {
  return <span aria-hidden="true" className={cn('block size-6', tones[tone], className)} />
}
