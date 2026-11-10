import { useState } from 'react'
import { Link, NavLink } from 'react-router'

import { ROUTES } from '@/shared/config'
import { cn } from '@/shared/lib'
import { Button, CloseIcon, Container, Logo, MenuIcon } from '@/shared/ui'

import { NAV_LINKS } from '../model/nav-links'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <header className="relative border-b border-white/10 bg-ink">
      <Container className="flex h-20 items-center justify-between">
        <Link to={ROUTES.home} onClick={close} aria-label="Finsweet — home">
          <Logo tone="light" />
        </Link>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
        </button>

        <nav
          id="main-nav"
          aria-label="Main"
          className={cn(
            'absolute inset-x-0 top-full z-50 bg-ink px-6 pb-6 lg:static lg:block lg:bg-transparent lg:p-0',
            isOpen ? 'block' : 'hidden',
          )}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === ROUTES.home}
                  onClick={close}
                  className={({ isActive }) =>
                    cn(
                      'relative flex h-12 items-center text-base transition-colors hover:text-white lg:h-20',
                      isActive ? 'text-white' : 'text-white/60',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && <span className="absolute inset-x-0 top-0 hidden h-[3px] bg-orange lg:block" />}
                      {label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <Button
                as={Link}
                to={ROUTES.contact}
                variant="link"
                withArrow
                onClick={close}
                className="h-12 text-base text-peach hover:text-white lg:h-20"
              >
                Clone project
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
