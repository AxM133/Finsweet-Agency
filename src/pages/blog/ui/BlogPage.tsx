import { Newsletter } from '@/widgets/newsletter'

import { ArchiveSection } from './ArchiveSection'
import { RecentSection } from './RecentSection'
import { TrendingSection } from './TrendingSection'

export function BlogPage() {
  return (
    <>
      <TrendingSection />
      <RecentSection />
      <ArchiveSection />
      <Newsletter />
    </>
  )
}
