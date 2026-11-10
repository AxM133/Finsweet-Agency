import type { ComponentPropsWithoutRef, ElementType } from 'react'

/**
 * Props for a polymorphic component: own props + `as` + all native props
 * of the rendered element (own props take precedence).
 *
 *   <Button as={Link} to="/blog" />  // `to` is typed from Link
 */
export type PolymorphicProps<
  TElement extends ElementType,
  TOwnProps = object,
> = TOwnProps & { as?: TElement } & Omit<
    ComponentPropsWithoutRef<TElement>,
    keyof TOwnProps | 'as'
  >
