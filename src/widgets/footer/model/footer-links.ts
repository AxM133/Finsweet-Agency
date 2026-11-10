import { ROUTES } from '@/shared/config'

export const PAGE_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'Service', to: ROUTES.services },
  { label: 'Company', to: ROUTES.company },
  { label: 'Career', to: ROUTES.careers },
  { label: 'News', to: ROUTES.blog },
] as const

export const SERVICE_LINKS = [
  { label: 'Technical support', to: `${ROUTES.services}#technical-support` },
  { label: 'Testing', to: `${ROUTES.services}#process` },
  { label: 'Development', to: `${ROUTES.services}#development` },
  { label: 'AWS/Azure', to: `${ROUTES.services}#aws-azure` },
  { label: 'Consulting', to: `${ROUTES.services}#consulting` },
  { label: 'Information Technology', to: `${ROUTES.services}#information-technology` },
] as const

export const RESOURCE_LINKS = [
  { label: 'About Us', to: ROUTES.company },
  { label: 'Testimonial', to: `${ROUTES.home}#testimonials` },
  { label: 'Privacy Policy', to: ROUTES.privacyPolicy },
  { label: 'Terms of use', to: '#' },
  { label: 'Blog', to: ROUTES.blog },
] as const
