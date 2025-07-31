'use client'

import React from 'react'
import Link from 'next/link'
import { Smartphone, Laptop, Headphones } from 'lucide-react'
import BreadCrumb from '@/components/BreadCrumb'

const categories = [
  {
    name: 'Phones',
    description: 'Explore the latest iPhones and Android phones built for speed and clarity.',
    icon: Smartphone,
    slug: 'phones',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-zinc-800',
  },
  {
    name: 'Laptops',
    description: 'Top-tier laptops for productivity, gaming, and everything in between.',
    icon: Laptop,
    slug: 'laptops',
    color: 'text-blue-500',
    bg: 'bg-green-50 dark:bg-zinc-800',
  },
  {
    name: 'Accessories',
    description: 'From earbuds to chargers, find gadgets to complete your setup.',
    icon: Headphones,
    slug: 'accessories',
    color: 'text-blue-500',
    bg: 'bg-purple-50 dark:bg-zinc-800',
  },
]

export default function CategoryPage() {
  return (
    <div className="relative px-4 md:px-12 pb-16 overflow-hidden pt-12">
      {/* Subtle background illustration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-black -z-10" />

      <BreadCrumb />

      {/* Intro banner */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Shop by Category
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto">
          Discover top tech picks — sorted by what you&apos;re looking for.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(({ name, description, icon: Icon, slug, color, bg }) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className={`group rounded-2xl shadow-md border border-gray-200 dark:border-zinc-700 ${bg} hover:scale-105 transition-transform duration-300 hover:shadow-xl p-6`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-white dark:bg-zinc-900 shadow-sm">
                <Icon size={32} className={`${color}`} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                {name}
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-zinc-400">
              {description}
            </p>

            {/* Call to Action */}
            <div className="mt-4 inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
              Browse {name}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
