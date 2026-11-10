import type { ElementType, ReactNode } from 'react'

import { cn } from '@/shared/lib'
import type { PolymorphicProps } from '@/shared/lib'

import { PixelCorner } from '../decor'
import { ArrowRightIcon } from '../icons'

const variants = {
  primary: 'relative h-16 gap-4 bg-primary px-8 text-base text-white hover:bg-primary-dark',
  link: 'gap-3 text-sm text-brand hover:text-primary',
} as const

type ButtonOwnProps = {
  variant?: keyof typeof variants
  withArrow?: boolean
  children?: ReactNode
  className?: string
}

export type ButtonProps<T extends ElementType = 'button'> = PolymorphicProps<T, ButtonOwnProps>

/**
 * Polymorphic button: renders a <button> by default,
 * or any element/component via `as` (e.g. react-router `Link`).
 */
export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Component: ElementType = as ?? 'button'

  return (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      className={cn(
        'group inline-flex cursor-pointer items-center justify-center font-medium transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        'disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...rest}
    >
      {variant === 'primary' && <PixelCorner />}
      {children}
      {withArrow && <ArrowRightIcon className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />}
    </Component>
  )
}
