import { images } from '@/shared/assets'
import { AccentBar, List, Stagger, StaggerItem } from '@/shared/ui'

const PHOTOS = [
  { src: images.office1, alt: 'Team meeting at a long wooden table' },
  { src: images.office2, alt: 'Colleagues gathered in a bright meeting room' },
  { src: images.office3, alt: 'Manager leading a meeting with her team' },
] as const

type OfficeGalleryProps = {
  /** Where the three-colour stripe sits on the last photo. */
  accent?: 'side' | 'top'
  className?: string
}

export function OfficeGallery({ accent = 'side', className }: OfficeGalleryProps) {
  return (
    <Stagger className={className}>
      <List
        items={PHOTOS}
        getKey={(photo) => photo.src}
        className="grid gap-4 sm:grid-cols-3"
        renderItem={(photo, index) => (
          <StaggerItem className="group relative overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="aspect-[0.95] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {index === PHOTOS.length - 1 &&
              (accent === 'side' ? (
                <AccentBar reverse orientation="vertical" className="absolute inset-y-0 right-0 w-3" />
              ) : (
                <AccentBar reverse className="absolute inset-x-0 top-0 h-3" />
              ))}
          </StaggerItem>
        )}
      />
    </Stagger>
  )
}
