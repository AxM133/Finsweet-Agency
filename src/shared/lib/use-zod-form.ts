import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { z } from 'zod'

type FieldErrors<TSchema extends z.ZodObject> = Partial<Record<keyof z.input<TSchema> & string, string>>

type UseZodFormOptions<TSchema extends z.ZodObject> = {
  schema: TSchema
  onSubmit: (values: z.output<TSchema>) => unknown
}

function readValues(form: HTMLFormElement) {
  const values: Record<string, unknown> = {}

  for (const element of Array.from(form.elements)) {
    if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) continue
    if (!element.name) continue

    values[element.name] =
      element instanceof HTMLInputElement && element.type === 'checkbox' ? element.checked : element.value
  }

  return values
}

/**
 * Generic form hook: the zod schema is the single source of truth for
 * validation messages and for the type of `values` in `onSubmit`.
 * Spread `formProps` on <form> and give inputs matching `name`s.
 */
export function useZodForm<TSchema extends z.ZodObject>({ schema, onSubmit }: UseZodFormOptions<TSchema>) {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<FieldErrors<TSchema>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string>()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitError(undefined)

    const result = schema.safeParse(readValues(form))

    if (!result.success) {
      const next: Record<string, string> = {}
      for (const issue of result.error.issues) {
        const key = String(issue.path[0])
        if (!(key in next)) next[key] = issue.message
      }
      setErrors(next as FieldErrors<TSchema>)

      const firstField = form.elements.namedItem(Object.keys(next)[0])
      if (firstField instanceof HTMLElement) firstField.focus()
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      await onSubmit(result.data)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  /** Clears the error of a field as soon as the user edits it. */
  function handleChange(event: FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement).name
    setErrors((current) => {
      if (!(name in current)) return current
      const next = { ...current }
      delete next[name as keyof typeof next]
      return next
    })
  }

  function reset() {
    formRef.current?.reset()
    setErrors({})
    setSubmitError(undefined)
  }

  return {
    errors,
    isSubmitting,
    submitError,
    reset,
    formProps: { ref: formRef, onSubmit: handleSubmit, onChange: handleChange, noValidate: true },
  }
}
