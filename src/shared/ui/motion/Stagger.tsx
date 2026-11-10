import { motion } from 'motion/react'
import type { HTMLMotionProps, Variants } from 'motion/react'

import { EASE } from './ease'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

type StaggerProps = HTMLMotionProps<'div'> & { interval?: number }

/** Reveals its `StaggerItem` descendants one after another on scroll. */
export function Stagger({ interval = 0.12, ...rest }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: interval } } }}
      {...rest}
    />
  )
}

export function StaggerItem(props: HTMLMotionProps<'div'>) {
  return <motion.div variants={itemVariants} {...props} />
}
