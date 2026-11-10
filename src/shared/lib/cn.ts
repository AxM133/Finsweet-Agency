import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Joins class names and resolves Tailwind conflicts (the last one wins). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
