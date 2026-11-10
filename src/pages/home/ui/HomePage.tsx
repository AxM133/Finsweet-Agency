import { Expertise } from '@/widgets/expertise'
import { Newsletter } from '@/widgets/newsletter'
import { Process } from '@/widgets/process'

import { AboutSection } from './AboutSection'
import { HeroSection } from './HeroSection'
import { LatestPostsSection } from './LatestPostsSection'
import { ServicesSection } from './ServicesSection'
import { TestimonialsSection } from './TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Expertise />
      <ServicesSection />
      <Process />
      <TestimonialsSection />
      <LatestPostsSection />
      <Newsletter />
    </>
  )
}
