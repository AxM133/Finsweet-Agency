import { Link } from 'react-router'

import { ROUTES, SITE } from '@/shared/config'
import { Button, Container, Heading, Logo, PixelMark, SocialLinks } from '@/shared/ui'

import { PAGE_LINKS, RESOURCE_LINKS, SERVICE_LINKS } from '../model/footer-links'

type FooterLink = { readonly label: string; readonly to: string }

function LinkColumn({ title, links, className }: { title?: string; links: readonly FooterLink[]; className: string }) {
  return (
    <div>
      {title && <p className="mb-5 text-base font-medium text-ink">{title}</p>}
      <ul className={className}>
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="transition-colors hover:text-primary">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Container className="grid gap-16 pt-20 pb-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <PixelMark />
          <Heading size="xl">
            Let's make
            <br />
            something special
          </Heading>
          <p className="text-2xl font-medium text-ink">Let's talk! 🤙</p>
          <div className="flex flex-col gap-1 text-xl text-ink">
            <a href={`tel:${SITE.phone.replaceAll(' ', '')}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <address className="max-w-64 border-t border-line/60 pt-4 text-sm leading-snug text-ink not-italic">
            {SITE.address}
          </address>
        </div>

        <div className="flex flex-col justify-between gap-12">
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 text-ink sm:grid-cols-3">
            <LinkColumn links={PAGE_LINKS} className="flex flex-col gap-5 text-base font-medium" />
            <LinkColumn title="Service" links={SERVICE_LINKS} className="flex flex-col gap-4 text-sm" />
            <LinkColumn title="Resources" links={RESOURCE_LINKS} className="flex flex-col gap-4 text-sm" />
          </nav>

          <Button
            as={Link}
            to={ROUTES.contact}
            variant="link"
            withArrow
            className="gap-4 self-start text-base text-ink hover:text-primary lg:self-end"
          >
            <span aria-hidden="true" className="flex h-3">
              <span className="w-3 bg-peach" />
              <span className="w-8 bg-brand" />
            </span>
            Contact Us
          </Button>
        </div>
      </Container>

      <div className="bg-peach-soft">
        <Container className="flex h-20 items-center justify-between text-ink">
          <div className="flex items-center gap-8">
            <Logo />
            <p className="hidden text-sm font-medium sm:block">©{new Date().getFullYear()} {SITE.name}</p>
          </div>
          <SocialLinks />
        </Container>
      </div>
    </footer>
  )
}
