import type { ContentBlock } from '@/shared/lib'
import { cn } from '@/shared/lib'

const BODY = 'text-sm leading-[1.8] text-body md:text-base'

/** Renders structured content blocks with the article typography. */
export function RichContent({ blocks, className }: { blocks: readonly ContentBlock[]; className?: string }) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return block.level === 2 ? (
              <h2 key={index} className="mt-4 text-2xl leading-snug font-semibold text-ink md:text-[2rem]">
                {block.text}
              </h2>
            ) : (
              <h3 key={index} className="mt-4 text-xl leading-snug font-semibold text-ink md:text-2xl">
                {block.text}
              </h3>
            )
          case 'paragraph':
            return (
              <p key={index} className={BODY}>
                {block.text}
              </p>
            )
          case 'list':
            return (
              <ul
                key={index}
                className={cn(BODY, 'flex flex-col gap-2', block.style === 'bullets' && 'list-disc pl-5 marker:text-ink')}
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
        }
      })}
    </div>
  )
}
