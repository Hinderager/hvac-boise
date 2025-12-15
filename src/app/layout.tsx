import type { Metadata, Viewport } from 'next'
import { Montserrat, Oswald } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { StructuredData } from '@/components/StructuredData'
import { QuoteFormProvider } from '@/context/QuoteFormContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hvac-boise.com'),
  title: {
    default: 'HVAC Services Boise | Heating & Air Conditioning Repair Idaho',
    template: '%s | Boise HVAC Pros',
  },
  description: 'Professional HVAC services in Boise, Meridian, Nampa, Caldwell & Eagle Idaho. AC repair, furnace installation, heating services. Licensed & insured. 24/7 emergency service. Call (208) 505-9352.',
  keywords: [
    'HVAC Boise',
    'air conditioning repair Boise Idaho',
    'furnace repair Meridian',
    'AC installation Nampa',
    'heating repair near me',
    'HVAC contractor Caldwell',
    'air conditioning service Eagle Idaho',
    'furnace installation Treasure Valley',
    '24 hour HVAC repair',
    'heating and cooling Boise',
    'AC tune up Idaho',
    'emergency furnace repair',
  ],
  authors: [{ name: 'Boise HVAC Pros' }],
  openGraph: {
    title: 'HVAC Services | Boise, Meridian, Nampa Idaho',
    description: 'Professional heating and air conditioning services in the Treasure Valley. Licensed, insured, and available 24/7 for emergencies.',
    url: 'https://hvac-boise.com',
    siteName: 'Boise HVAC Pros',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans antialiased`}>
        <QuoteFormProvider>
          <Header />
          {children}
          <Footer />
        </QuoteFormProvider>
      </body>
    </html>
  )
}
