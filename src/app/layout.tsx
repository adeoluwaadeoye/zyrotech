import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZyroTech Gadgets Store',
  description: 'Clean dropshipping for iPhones, laptops, and accessories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-gray-900 dark:text-white mt-12`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen pt-12">{children}</main> {/* <== padding here */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
