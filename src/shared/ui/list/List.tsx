import type { Key, ReactNode } from 'react'

type ListProps<TItem> = {
  items: readonly TItem[]
  getKey: (item: TItem) => Key
  renderItem: (item: TItem, index: number) => ReactNode
  /** Rendered instead of the list when `items` is empty. */
  fallback?: ReactNode
  className?: string
  itemClassName?: string
}

/** Generic list: item type is inferred from `items`. */
export function List<TItem>({
  items,
  getKey,
  renderItem,
  fallback = null,
  className,
  itemClassName,
}: ListProps<TItem>) {
  if (items.length === 0) return fallback

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={getKey(item)} className={itemClassName}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  )
}
