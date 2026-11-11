import { countWords } from '@/shared/lib'
import type { ContentBlock } from '@/shared/lib'

const WORDS_PER_MINUTE = 200

export function getReadingMinutes(content: readonly ContentBlock[]) {
  return Math.max(1, Math.ceil(countWords(content) / WORDS_PER_MINUTE))
}
