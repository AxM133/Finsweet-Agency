import { ROUTES } from '@/shared/config'

export const NAV_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Service', to: ROUTES.services },
  { label: 'Company', to: ROUTES.company },
  { label: 'Career', to: ROUTES.careers },
  { label: 'Blog', to: ROUTES.blog },
  { label: 'Contact us', to: ROUTES.contact },
] as const
