import { createBrowserRouter } from 'react-router'

import { ROUTES } from '@/shared/config'

import { RootLayout } from '../layouts/RootLayout'
import { lazyPage } from './lazy-page'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTES.home, lazy: lazyPage(() => import('@/pages/home'), 'HomePage') },
      { path: ROUTES.services, lazy: lazyPage(() => import('@/pages/services'), 'ServicesPage') },
      { path: ROUTES.company, lazy: lazyPage(() => import('@/pages/company'), 'CompanyPage') },
      { path: ROUTES.blog, lazy: lazyPage(() => import('@/pages/blog'), 'BlogPage') },
      { path: ROUTES.blogPost, lazy: lazyPage(() => import('@/pages/blog-post'), 'BlogPostPage') },
      { path: ROUTES.careers, lazy: lazyPage(() => import('@/pages/careers'), 'CareersPage') },
      {
        path: ROUTES.careerDetails,
        lazy: lazyPage(() => import('@/pages/career-details'), 'CareerDetailsPage'),
      },
      { path: ROUTES.contact, lazy: lazyPage(() => import('@/pages/contact'), 'ContactPage') },
      {
        path: ROUTES.teamMember,
        lazy: lazyPage(() => import('@/pages/team-member'), 'TeamMemberPage'),
      },
      {
        path: ROUTES.privacyPolicy,
        lazy: lazyPage(() => import('@/pages/privacy-policy'), 'PrivacyPolicyPage'),
      },
      { path: '*', lazy: lazyPage(() => import('@/pages/not-found'), 'NotFoundPage') },
    ],
  },
])
