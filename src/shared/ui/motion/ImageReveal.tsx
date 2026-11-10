import { motion } from 'motion/react'

import { cn } from '@/shared/lib'

import { EASE } from './ease'

type Side = 'left' | 'right' | 'top' | 'bottom'

/** Fully clipped state: the visible area collapses towards the opposite side. */
const HIDDEN: Record<Side, string> = {
  left: 'inset(0 100% 0 0)',
  right: 'inset(0 0 0 100%)',
  top: 'inset(0 0 100% 0)',
  bottom: 'inset(100% 0 0 0)',
}

type ImageRevealProps = {
  src: string
  alt: string
  /** The side the image wipes in from. */
  from?: Side
  /** Size the frame here; the image fills it (`object-cover`). */
  className?: string
}

export function ImageReveal({ src, alt, from = 'left', className }: ImageRevealProps) {
  const viewport = { once: true, margin: '-80px' }

  return (
    <motion.div
      initial={{ clipPath: HIDDEN[from] }}
      whileInView={{ clipPath: 'inset(0 0 0 0)' }}
      viewport={viewport}
      transition={{ duration: 1, ease: EASE }}
      className={cn('relative overflow-hidden', className)}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.4, ease: EASE }}
        className="absolute inset-0 size-full object-cover"
      />
    </motion.div>
  )
}
