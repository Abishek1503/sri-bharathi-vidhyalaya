import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { Poppins, Quicksand, Fredoka } from 'next/font/google'

// Load fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SRI BHARATHI VIDHYALAYA',
  description:
    'Celebrating 25 years of successful educational service. Admissions open for Pre-KG to 5th Standard for Academic Year 2026-2027.',
  keywords:
    'school, education, pre-kg, lkg, ukg, primary school, Tiruvallur, TamilNadu',

  verification: {
    google: 'IhfbKxbOhDlRUDU1wxagUi08xKuLwPYVrGmbO0ppG74',
  },

  icons: {
    icon: '/gallery/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable} ${quicksand.variable} ${fredoka.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        <main className="transition-colors duration-500">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}