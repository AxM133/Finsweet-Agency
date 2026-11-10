import type { ComponentProps } from 'react'

export function ArrowRightIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  )
}
