import { motion, useScroll, useSpring } from 'motion/react'
import type { RefObject } from 'react'

/** Thin bar at the top of the viewport that fills while the article is read. */
export function ReadingProgress({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start 80%', 'end 30%'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })

  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-primary" />
}
