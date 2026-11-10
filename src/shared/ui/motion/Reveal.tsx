import { motion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'

import { EASE } from './ease'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
}

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  direction?: Direction
  distance?: number
}

/** Fades + slides its content in once, when it scrolls into view. */
export function Reveal({ delay = 0, direction = 'up', distance = 32, ...rest }: RevealProps) {
  const { x = 0, y = 0 } = offsets[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x: x * distance, y: y * distance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    />
  )
}
