import { Outlet, ScrollRestoration } from 'react-router'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
