// src/app/category/page.tsx

import Link from 'next/link'
import { categories } from '@/lib/categories'
import { ArrowRight, ChevronRight } from 'lucide-react'

export default function CategoryListPage() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto space-y-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        <ol className="flex items-center space-x-1">
          <li>
            <Link href="/" className="hover:underline text-gray-600 dark:text-gray-300">Home</Link>
          </li>
          <li>
            <ChevronRight className="h-4 w-4 mx-1" />
          </li>
          <li className="text-gray-900 dark:text-white font-medium">Categories</li>
        </ol>
      </nav>

      {/* Page Title */}
      <header className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Explore Product Categories</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Select a category to discover curated tech essentials.
        </p>
      </header>

      {/* Category Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map(category => (
          <li key={category.slug} className="group border dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
            <Link href={`/category/${category.slug}`} className="flex flex-col h-full justify-between">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                Browse <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Advert Section */}
      <section className="mt-16 bg-blue-50 dark:bg-blue-950 p-8 rounded-xl text-center shadow-inner">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
          Don’t Miss Our Back-to-School Tech Deals!
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-4">
          Save big on laptops, phones, and accessories for the new season. Limited-time offers while stock lasts.
        </p>
        <Link href="/promo" className="inline-block mt-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition">
          Shop Featured Deals
        </Link>
      </section>
    </section>
  )
}
