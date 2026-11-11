import { Link } from 'react-router'

import { ROUTES } from '@/shared/config'
import { Button, Heading, PixelMark, Reveal, Section } from '@/shared/ui'

type NotFoundBlockProps = {
  title?: string
  text?: string
}

export function NotFoundBlock({
  title = 'Page not found',
  text = 'The page you are looking for does not exist or has been moved.',
}: NotFoundBlockProps) {
  return (
    <Section aria-labelledby="not-found-title" className="min-h-[60vh]" containerClassName="flex justify-center">
      <Reveal className="flex max-w-lg flex-col items-center gap-6 text-center">
        <PixelMark className="size-8" />
        <p aria-hidden="true" className="text-[7rem] leading-none font-semibold text-peach sm:text-[9rem]">
          404
        </p>
        <Heading as="h1" id="not-found-title" size="lg">
          {title}
        </Heading>
        <p className="text-sm leading-relaxed text-muted">{text}</p>
        <Button as={Link} to={ROUTES.home} withArrow>
          Back to home
        </Button>
      </Reveal>
    </Section>
  )
}
