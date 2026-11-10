import { useId } from 'react'
import type { ComponentProps } from 'react'

import { cn } from '@/shared/lib'

import { Field, fieldStyles, textareaSizes } from '../field'
import type { FieldVariant } from '../field'

export type TextareaProps = ComponentProps<'textarea'> & {
  label?: string
  error?: string
  variant?: FieldVariant
}

export function Textarea({ label, error, variant = 'underline', className, id, placeholder, ...rest }: TextareaProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId
  const isUnderline = variant === 'underline'

  return (
    <Field id={textareaId} label={label} error={error} hideLabel={!isUnderline}>
      <textarea
        id={textareaId}
        placeholder={placeholder ?? (isUnderline ? undefined : label)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={cn('w-full outline-none', fieldStyles[variant], textareaSizes[variant], className)}
        {...rest}
      />
    </Field>
  )
}
