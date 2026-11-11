import { AnimatePresence, motion } from 'motion/react'
import { useId, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'

import { cn } from '@/shared/lib'

type TabItem<TValue extends string> = {
  value: TValue
  label: string
  content: ReactNode
}

type TabsProps<TValue extends string> = {
  items: readonly TabItem<TValue>[]
  defaultValue?: TValue
  className?: string
  listClassName?: string
  panelClassName?: string
}

/**
 * Accessible tabs (WAI-ARIA): arrow keys / Home / End move between tabs,
 * the underline slides to the active one. `TValue` is inferred from `items`.
 */
export function Tabs<TValue extends string>({
  items,
  defaultValue,
  className,
  listClassName,
  panelClassName,
}: TabsProps<TValue>) {
  const baseId = useId()
  const [value, setValue] = useState<TValue>(defaultValue ?? items[0].value)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const active = items.find((item) => item.value === value) ?? items[0]

  function select(next: TabItem<TValue>) {
    setValue(next.value)
    tabRefs.current[next.value]?.focus()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = items.findIndex((item) => item.value === value)
    const lastIndex = items.length - 1
    const nextIndex =
      event.key === 'ArrowRight' ? (index + 1) % items.length
      : event.key === 'ArrowLeft' ? (index - 1 + items.length) % items.length
      : event.key === 'Home' ? 0
      : event.key === 'End' ? lastIndex
      : -1

    if (nextIndex === -1) return
    event.preventDefault()
    select(items[nextIndex])
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        onKeyDown={handleKeyDown}
        className={cn('flex justify-center gap-8 border-b-2 border-ink/5 sm:gap-14', listClassName)}
      >
        {items.map((item) => {
          const isActive = item.value === active.value

          return (
            <button
              key={item.value}
              ref={(element) => {
                tabRefs.current[item.value] = element
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.value}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${item.value}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setValue(item.value)}
              className={cn(
                'relative cursor-pointer px-1 pt-2 pb-5 text-base font-semibold transition-colors sm:text-lg',
                isActive ? 'text-primary' : 'text-ink hover:text-primary',
              )}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId={`${baseId}-indicator`}
                  className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary"
                />
              )}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${active.value}`}
        aria-labelledby={`${baseId}-tab-${active.value}`}
        tabIndex={0}
        className={panelClassName}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.value}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {active.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
