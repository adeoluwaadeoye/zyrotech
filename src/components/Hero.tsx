'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-white bg-black -mt-2.5">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/images/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 -bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm sm:text-base uppercase tracking-wider text-gray-300 mb-4"
        >
          Welcome to ZyroTech
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Elite Tech, Seamless Delivery
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10"
        >
          Discover cutting-edge smartphones, laptops, and accessories—delivered fast, with no compromise on quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-4"
        >
          <Link
            href="/products"
            className="bg-white text-black px-6 py-3 text-sm font-semibold rounded shadow hover:scale-105 transition-transform duration-300"
          >
            Shop Now
          </Link>
          <Link
            href="/contact"
            className="border border-white px-6 py-3 text-sm font-semibold rounded hover:bg-white/10 transition-colors duration-300"
          >
             Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
