import { SITE } from '@/shared/config'
import { Container, Reveal } from '@/shared/ui'

const { lat, lng } = SITE.coordinates
const SPAN = { lng: 0.012, lat: 0.008 }

const MAP_URL =
  'https://www.openstreetmap.org/export/embed.html' +
  `?bbox=${lng - SPAN.lng}%2C${lat - SPAN.lat}%2C${lng + SPAN.lng}%2C${lat + SPAN.lat}` +
  `&layer=mapnik&marker=${lat}%2C${lng}`

export function ContactMap() {
  return (
    <Container className="pb-20 lg:pb-28">
      <Reveal>
        <iframe
          title={`Map showing the Finsweet office: ${SITE.address}`}
          src={MAP_URL}
          loading="lazy"
          className="h-80 w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-96"
        />
      </Reveal>
    </Container>
  )
}
