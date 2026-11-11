import { Newsletter } from '@/widgets/newsletter'

import { CareersHero } from './CareersHero'
import { CultureSection } from './CultureSection'
import { JobsSection } from './JobsSection'

export function CareersPage() {
  return (
    <>
      <CareersHero />
      <JobsSection />
      <CultureSection />
      <Newsletter />
    </>
  )
}
