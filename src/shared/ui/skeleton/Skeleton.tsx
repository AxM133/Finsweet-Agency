import { cn } from '@/shared/lib'

export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn('animate-pulse bg-ink/10', className)} />
}
