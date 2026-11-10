import type { ElementType, ReactNode } from 'react'

import { cn } from '@/shared/lib'
import type { PolymorphicProps } from '@/shared/lib'

const sizes = {
  display: 'text-4xl leading-[1.2] font-semibold md:text-5xl lg:text-[3.5rem]',
  xl: 'text-3xl leading-[1.2] font-semibold md:text-5xl',
  lg: 'text-3xl leading-[1.3] font-semibold md:text-[2.5rem]',
  md: 'text-2xl leading-snug font-semibold md:text-[1.75rem]',
  sm: 'text-lg leading-snug font-semibold md:text-xl',
} as const

const tones = {
  dark: 'text-ink',
  light: 'text-white',
} as const

type HeadingOwnProps = {
  size?: keyof typeof sizes
  tone?: keyof typeof tones
  children?: ReactNode
  className?: string
}

export type HeadingProps<T extends ElementType = 'h2'> = PolymorphicProps<T, HeadingOwnProps>

/** `size` is the visual scale, `as` is the semantic tag (h1…h6). */
export function Heading<T extends ElementType = 'h2'>({
  as,
  size = 'lg',
  tone = 'dark',
  className,
  ...rest
}: HeadingProps<T>) {
  const Component: ElementType = as ?? 'h2'

  return <Component className={cn(sizes[size], tones[tone], className)} {...rest} />
}
