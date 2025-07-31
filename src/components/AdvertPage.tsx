'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AdvertPage() {
  return (
    <section className="bg-[#f9fbfe] dark:bg-[#141b23] py-12 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-start gap-6 lg:gap-10">
        {/* Left: Heading, Specs, Price, Button (desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-900 dark:text-white space-y-4 lg:space-y-5"
        >
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            iPhone 15 Pro – Engineered for Power and Precision
          </h1>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
            Experience the next generation of performance and design. With aerospace-grade titanium, the iPhone 15 Pro is lighter, tougher, and more capable than ever.
          </p>

          <ul className="text-[15px] sm:text-base font-semibold text-gray-800 dark:text-slate-200 space-y-1 leading-relaxed">
            <li>• A17 Pro Chip – Console-level performance</li>
            <li>• 48MP Main Camera – Pro-grade photography</li>
            <li>• 6.1” Super Retina XDR – Brighter, sharper display</li>
            <li>• Titanium Build – Durable yet lightweight</li>
            <li>• All-day Battery – Up to 29 hours usage</li>
          </ul>

          <p className="text-lg font-bold text-blue-800 dark:text-cyan-400">
            ₦1,200,000
          </p>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link
              href="/product/iphone-15-pro"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 text-base font-medium rounded-lg transition w-fit"
            >
              Buy Now
            </Link>
          </div>
        </motion.div>

        {/* Right: Image + Mobile Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start gap-4"
        >
          <Image
            src="/images/products/iphone-15.jpg"
            alt="iPhone 15 Pro"
            width={400}
            height={320}
            className="rounded-xl"
          />

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center lg:text-left">
            12-month warranty · Ships in 24h · 100% original
          </p>

          {/* Mobile & Tablet Button */}
          <div className="block lg:hidden w-full sm:w-auto">
            <Link
              href="/product/iphone-15-pro"
              className="block text-center bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 text-base font-medium rounded-lg transition"
            >
              Buy Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
