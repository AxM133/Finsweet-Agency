export const ROUTES = {
  home: '/',
  services: '/services',
  company: '/company',
  blog: '/blog',
  blogPost: '/blog/:slug',
  careers: '/careers',
  careerDetails: '/careers/:id',
  contact: '/contact',
  teamMember: '/team/:slug',
  privacyPolicy: '/privacy-policy',
  /** dev only */
  uiKit: '/ui-kit',
} as const

export type AppRouteKey = keyof typeof ROUTES
