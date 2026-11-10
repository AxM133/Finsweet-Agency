import { cn } from '@/shared/lib'

// 3×3 grid, '' = empty cell
const CELLS = ['bg-orange', 'bg-peach', 'bg-brand', 'bg-orange', 'bg-orange', '', 'bg-brand', '', '']

/** Small multi-colour pixel mark (footer, section corners). */
export function PixelMark({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('grid size-8 grid-cols-3 grid-rows-3', className)}>
      {CELLS.map((color, index) => (
        <span key={index} className={color} />
      ))}
    </span>
  )
}
