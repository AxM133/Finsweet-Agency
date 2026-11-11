import { cn } from '@/shared/lib'

const sizes = {
  sm: 'size-8 text-xs',
  md: 'size-12 text-sm',
  lg: 'size-20 text-xl',
  xl: 'size-64 text-6xl sm:size-80',
} as const

type AvatarProps = {
  src?: string
  /** Person's name: used as alt text and for the initials fallback. */
  name: string
  size?: keyof typeof sizes
  className?: string
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function Avatar({ src, name, size = 'md', className }: AvatarProps) {
  const base = 'shrink-0 rounded-full object-cover'

  if (src) {
    return <img src={src} alt={name} className={cn(base, sizes[size], className)} />
  }

  return (
    <span
      role="img"
      aria-label={name}
      className={cn(base, 'grid place-items-center bg-peach font-medium text-ink', sizes[size], className)}
    >
      {getInitials(name)}
    </span>
  )
}
