'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiSmartphone, FiMonitor, FiHeadphones } from 'react-icons/fi'

const categories = [
  {
    name: 'Phones',
    image: '/images/categories/phones.jpg',
    href: '/category/phones',
    description: 'Browse the latest smartphones from top brands with unbeatable deals.',
    icon: <FiSmartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: 'Laptops',
    image: '/images/categories/laptops.jpg',
    href: '/category/laptops',
    description: 'High-performance laptops for work, gaming, and everything in between.',
    icon: <FiMonitor className="w-6 h-6 text-green-600 dark:text-green-400" />,
  },
  {
    name: 'Accessories',
    image: '/images/categories/accessories.jpg',
    href: '/category/accessories',
    description: 'Find the perfect add-ons: cables, cases, chargers, and more.',
    icon: <FiHeadphones className="w-6 h-6 text-orange-500 dark:text-orange-400" />,
  },
]

export default function Category() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-900 py-20 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-white mb-4">
          Shop by Category
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Discover top-quality devices and accessories curated to fit your lifestyle and budget.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              href={cat.href}
              key={cat.name}
              className="group rounded-2xl bg-white dark:bg-zinc-800 shadow-sm hover:shadow-lg transition overflow-hidden border border-gray-200 dark:border-zinc-700"
            >
              <div className="relative w-full h-48">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  {cat.icon}
                  <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
