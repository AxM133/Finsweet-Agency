import type { ComponentType } from 'react'

import { cn } from '@/shared/lib'

type IconBadgeProps = {
  icon: ComponentType<{ className?: string }>
  className?: string
}

/** Round peach badge with an icon inside. */
export function IconBadge({ icon: Icon, className }: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('grid size-10 shrink-0 place-items-center rounded-full bg-peach-soft text-orange', className)}
    >
      <Icon className="size-5" />
    </span>
  )
}
