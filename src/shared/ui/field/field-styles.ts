export type FieldVariant = 'underline' | 'filled' | 'white'

/** Shared look for Input and Textarea. */
export const fieldStyles: Record<FieldVariant, string> = {
  underline:
    'border-b border-line bg-transparent py-2 text-base text-ink placeholder:text-muted/60 focus:border-primary',
  filled:
    'bg-lavender px-10 text-lg text-ink placeholder:text-body focus-visible:outline-2 focus-visible:outline-primary',
  white:
    'bg-white px-6 text-base text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-ink',
}

export const inputSizes: Record<FieldVariant, string> = {
  underline: '',
  filled: 'h-24',
  white: 'h-16',
}

export const textareaSizes: Record<FieldVariant, string> = {
  underline: 'min-h-28 resize-none',
  filled: 'min-h-56 resize-y py-9',
  white: 'min-h-32 resize-y py-4',
}
