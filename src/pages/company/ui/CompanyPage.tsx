import { Expertise } from '@/widgets/expertise'
import { Newsletter } from '@/widgets/newsletter'

import { IntroSection } from './IntroSection'
import { StorySection } from './StorySection'
import { TeamSection } from './TeamSection'
import { VisionSection } from './VisionSection'

export function CompanyPage() {
  return (
    <>
      <IntroSection />
      <StorySection />
      <Expertise />
      <VisionSection />
      <TeamSection />
      <Newsletter />
    </>
  )
}
