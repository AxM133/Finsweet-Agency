import { queryOptions } from '@tanstack/react-query'

import { mockRequest } from '@/shared/api'
import { images } from '@/shared/assets'

import { testimonialListSchema } from '../model/schema'
import type { Testimonial } from '../model/schema'

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote:
      'Finsweet has been a wonderful partner to work with. I have been a customer now for a few months now and I have had nothing but positive experiences!',
    author: { name: 'Johnny Andro', role: 'Director, Company', avatar: images.avatar1 },
  },
  {
    id: '2',
    quote:
      'The team shipped our product ahead of schedule and the quality was outstanding. Communication was clear at every step of the project.',
    author: { name: 'Maria Lopez', role: 'Product Lead, Northwind', avatar: images.avatar2 },
  },
  {
    id: '3',
    quote:
      'From the first workshop to the final release, Finsweet felt like an extension of our own team. We will definitely work together again.',
    author: { name: 'David Chen', role: 'CTO, Brightly', avatar: images.avatar3 },
  },
]

export const testimonialQueries = {
  all: () =>
    queryOptions({
      queryKey: ['testimonials'],
      queryFn: () => mockRequest(testimonialListSchema, TESTIMONIALS),
    }),
}
