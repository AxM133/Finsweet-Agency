import { useId } from 'react'
import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/shared/lib'

import { CheckIcon } from '../icons'

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'children'> & {
  label: ReactNode
  error?: string
}

export function Checkbox({ label, error, className, id, ...rest }: CheckboxProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={inputId} className="flex cursor-pointer items-start gap-4 text-base text-ink">
        <input
          id={inputId}
          type="checkbox"
          className="peer sr-only"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />
        <span
          aria-hidden="true"
          className={cn(
            'grid size-8 shrink-0 place-items-center border-2 border-line bg-white text-transparent transition-colors',
            'peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white',
            'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary',
            error && 'border-red-500',
          )}
        >
          <CheckIcon className="size-5" />
        </span>
        <span className="pt-1 text-sm md:text-base">{label}</span>
      </label>
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
