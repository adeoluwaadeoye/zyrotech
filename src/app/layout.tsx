 import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'ZyroTech Gadgets Store',
    template: '%s | ZyroTech',
  },
  description: 'Shop iPhones, laptops, and accessories at unbeatable prices. Fast delivery, secure checkout, and trusted support.',
  keywords: ['ZyroTech', 'iPhones', 'Laptops', 'Tech Accessories', 'Online Store', 'Nigeria', 'Gadget Deals'],
  metadataBase: new URL('https://zyrotech.com'), // Replace with your actual domain
  openGraph: {
    title: 'ZyroTech Gadgets Store',
    description: 'Affordable, high-quality gadgets. Discover our iPhones, laptops, and tech accessories.',
    url: 'https://zyrotech.com',
    siteName: 'ZyroTech',
    images: [
      {
        url: '/og-image.jpg', // Place this in /public/
        width: 1200,
        height: 630,
        alt: 'ZyroTech – Premium Gadgets at Affordable Prices',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZyroTech Gadgets Store',
    description: 'Premium tech at unbeatable prices. Shop laptops, iPhones, accessories & more.',
    images: ['/og-image.jpg'],
    creator: '@zyrotech', // Optional: Add if you have a Twitter handle
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#0f172a',
  icons: {
    icon: '/favicon.ico', // Place favicon.ico in /public
    apple: '/apple-touch-icon.png', // Optional: 180x180 for iOS, add if needed
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-zinc-950 text-gray-900 dark:text-white mt-12`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-12">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
