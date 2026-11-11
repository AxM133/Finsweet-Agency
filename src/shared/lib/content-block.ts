import { z } from 'zod'

/** Structured article content: used by blog posts, privacy policy, job details. */
export const contentBlockSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('heading'),
    level: z.union([z.literal(2), z.literal(3)]),
    text: z.string(),
  }),
  z.object({ type: z.literal('paragraph'), text: z.string() }),
  z.object({
    type: z.literal('list'),
    /** `plain` — lines without markers, `bullets` — with dots. */
    style: z.enum(['plain', 'bullets']),
    items: z.array(z.string()),
  }),
])

export type ContentBlock = z.infer<typeof contentBlockSchema>

/** Number of words in the content, used for "N min read". */
export function countWords(blocks: readonly ContentBlock[]) {
  return blocks.reduce((total, block) => {
    const text = block.type === 'list' ? block.items.join(' ') : block.text
    return total + text.split(/\s+/).filter(Boolean).length
  }, 0)
}
