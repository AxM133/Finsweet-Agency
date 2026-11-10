import { useId } from 'react'
import type { ComponentProps } from 'react'

import { cn } from '@/shared/lib'

import { Field, fieldStyles, inputSizes } from '../field'
import type { FieldVariant } from '../field'

export type InputProps = ComponentProps<'input'> & {
  label?: string
  error?: string
  variant?: FieldVariant
}

export function Input({ label, error, variant = 'underline', className, id, placeholder, ...rest }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const isUnderline = variant === 'underline'

  return (
    <Field id={inputId} label={label} error={error} hideLabel={!isUnderline}>
      <input
        id={inputId}
        placeholder={placeholder ?? (isUnderline ? undefined : label)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn('w-full outline-none', fieldStyles[variant], inputSizes[variant], className)}
        {...rest}
      />
    </Field>
  )
}
