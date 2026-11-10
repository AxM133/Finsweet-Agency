import type { ReactNode } from 'react'

import { cn } from '@/shared/lib'

type FieldProps = {
  id: string
  label?: string
  error?: string
  /** Keep the label for screen readers only (it acts as the placeholder). */
  hideLabel?: boolean
  children: ReactNode
}

/** Label + control + error message. Used inside Input and Textarea. */
export function Field({ id, label, error, hideLabel, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className={cn('text-sm text-muted', hideLabel && 'sr-only')}>
          {label}
        </label>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
