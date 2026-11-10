import type { ComponentProps } from 'react'

import { cn } from '@/shared/lib'

/** Page content column: 1280px of content + 24px side padding. */
export function Container({ className, ...rest }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1328px] px-6', className)} {...rest} />
}
