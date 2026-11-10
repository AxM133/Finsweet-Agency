import type { z } from 'zod'

/**
 * Stand-in for `request` while there is no backend: waits a bit and validates
 * `data` with the same schema. Swap it for `request(path, schema)` later.
 */
export async function mockRequest<TSchema extends z.ZodType>(
  schema: TSchema,
  data: unknown,
  delayMs = 500,
): Promise<z.infer<TSchema>> {
  await new Promise((resolve) => setTimeout(resolve, delayMs))
  return schema.parse(data)
}
