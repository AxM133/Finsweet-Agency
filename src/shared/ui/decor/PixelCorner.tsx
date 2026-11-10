import { cn } from '@/shared/lib'

/**
 * Pixel-art corner accent (buttons, newsletter banner).
 * Positioned in the top-left corner of the nearest `relative` parent;
 * the size is controlled by `className` (e.g. `size-6`, `size-[70px]`).
 */
export function PixelCorner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('pointer-events-none absolute left-0 top-0 size-6', className)}
    >
      <span className="absolute left-0 top-0 h-[62%] w-[71%] bg-orange" />
      <span className="absolute left-[38%] top-0 size-[38%] bg-peach" />
      <span className="absolute left-[71%] top-0 size-[29%] bg-white/40" />
      <span className="absolute left-0 top-[62%] size-[34%] bg-white/40" />
    </span>
  )
}
