import { motion } from 'motion/react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export function RootLayout() {
  const { pathname } = useLocation()

  return (
    <>
      <Header />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
