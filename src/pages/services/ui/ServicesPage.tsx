import { Newsletter } from '@/widgets/newsletter'
import { Process } from '@/widgets/process'

import { SERVICE_SECTIONS } from '../model/service-sections'
import { ServiceBlock } from './ServiceBlock'
import { ServicesHero } from './ServicesHero'

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Process tone="lavender" />
      {SERVICE_SECTIONS.map((section, index) => (
        <ServiceBlock key={section.id} section={section} imageLeft={index % 2 === 1} />
      ))}
      <Newsletter />
    </>
  )
}
