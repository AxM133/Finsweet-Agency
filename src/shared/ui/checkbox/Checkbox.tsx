import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/shared/lib'

import { CheckIcon } from '../icons'

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'children'> & {
  label: ReactNode
}

export function Checkbox({ label, className, ...rest }: CheckboxProps) {
  return (
    <label className={cn('flex cursor-pointer items-start gap-4 text-base text-ink', className)}>
      <input type="checkbox" className="peer sr-only" {...rest} />
      <span
        aria-hidden="true"
        className={cn(
          'grid size-8 shrink-0 place-items-center border-2 border-line bg-white text-transparent transition-colors',
          'peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white',
          'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary',
        )}
      >
        <CheckIcon className="size-5" />
      </span>
      <span className="pt-1">{label}</span>
    </label>
  )
}
