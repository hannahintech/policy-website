import './globals.css'
import { ReactNode } from 'react'
import { Manrope, Bebas_Neue } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' })
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-heading' })

export const metadata = {
  title: 'GPEW Policy Website',
  description: 'Green Party Policy and Motions Site',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${bebas.variable}`}>
      <body className="bg-white font-body text-dark">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow px-4 py-6 sm:px-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import Header from '@/components/Header'
import Footer from '@/components/Footer'
