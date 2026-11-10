import { cn } from '@/shared/lib'

type AccentBarProps = {
  orientation?: 'horizontal' | 'vertical'
  /** Default order: blue → peach → orange. `reverse`: orange → peach → blue. */
  reverse?: boolean
  /** Set the thickness and length here, e.g. `h-3 w-64` or `w-3 h-full`. */
  className?: string
}

const SEGMENTS = [
  { color: 'bg-primary-dark', grow: 'grow-[1]' },
  { color: 'bg-peach', grow: 'grow-[3]' },
  { color: 'bg-orange', grow: 'grow-[1]' },
] as const

/** Three-colour stripe that frames images, cards and banners. */
export function AccentBar({ orientation = 'horizontal', reverse = false, className }: AccentBarProps) {
  const segments = reverse ? [...SEGMENTS].reverse() : SEGMENTS

  return (
    <span
      aria-hidden="true"
      className={cn('flex', orientation === 'vertical' ? 'flex-col' : 'flex-row', className)}
    >
      {segments.map(({ color, grow }) => (
        <span key={color} className={cn('basis-0', color, grow)} />
      ))}
    </span>
  )
}
