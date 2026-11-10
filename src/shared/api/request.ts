import type { z } from 'zod'

import { env } from '@/shared/config'

import { HttpError } from './http-error'

/**
 * Generic typed request: the response is validated by a zod schema
 * and the return type is inferred from it — `z.infer<TSchema>`.
 */
export async function request<TSchema extends z.ZodType>(
  path: string,
  schema: TSchema,
  init?: RequestInit,
): Promise<z.infer<TSchema>> {
  const response = await fetch(`${env.apiUrl}${path}`, init)

  if (!response.ok) {
    throw new HttpError(response.status, response.statusText)
  }

  return schema.parse(await response.json())
}
