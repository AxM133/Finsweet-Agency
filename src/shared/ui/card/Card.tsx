import type { ElementType, ReactNode } from 'react'

import { cn } from '@/shared/lib'
import type { PolymorphicProps } from '@/shared/lib'

const variants = {
  shadow: 'bg-white shadow-card',
  outline: 'border border-line/60 bg-white',
  flat: 'bg-white',
} as const

type CardOwnProps = {
  variant?: keyof typeof variants
  children?: ReactNode
  className?: string
}

export type CardProps<T extends ElementType = 'div'> = PolymorphicProps<T, CardOwnProps>

/** White surface. Padding and layout are up to the consumer. */
export function Card<T extends ElementType = 'div'>({
  as,
  variant = 'shadow',
  className,
  ...rest
}: CardProps<T>) {
  const Component: ElementType = as ?? 'div'

  return <Component className={cn(variants[variant], className)} {...rest} />
}
