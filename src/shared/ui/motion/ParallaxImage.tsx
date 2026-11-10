import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { cn } from '@/shared/lib'

type ParallaxImageProps = {
  src: string
  alt: string
  /** Sizing of the clipping frame, e.g. `aspect-[16/5]`. */
  className?: string
}

/** Image that drifts slightly slower than the page while scrolling. */
export function ParallaxImage({ src, alt, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={reduceMotion ? undefined : { y, scale: 1.2 }}
        className="size-full object-cover"
      />
    </div>
  )
}
