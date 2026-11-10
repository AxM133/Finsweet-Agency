import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

type CountUpProps = {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

/** Counts from 0 to `to` the first time it becomes visible. */
export function CountUp({ to, suffix = '', duration = 1.8, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const count = useMotionValue(0)
  const text = useTransform(count, (value) => `${Math.round(value)}${suffix}`)

  useEffect(() => {
    if (!isInView) return
    if (reduceMotion) {
      count.set(to)
      return
    }
    const controls = animate(count, to, { duration, ease: 'easeOut' })
    return () => controls.stop()
  }, [isInView, reduceMotion, count, to, duration])

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  )
}
