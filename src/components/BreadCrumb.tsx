'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function BreadCrumb() {
  const pathname = usePathname()

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((seg, index, arr) => {
      let href = '/' + arr.slice(0, index + 1).join('/')
      let label = seg

      if (seg === 'product') {
        href = '/products'
        label = 'Products'
      }

      label = label.charAt(0).toUpperCase() + label.slice(1)

      return { href, label }
    })

  if (segments.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-sm text-gray-600 dark:text-gray-300 flex items-center space-x-1"
    >
      <Link href="/" className="hover:underline text-blue-500 dark:text-blue-400">
        Home
      </Link>

      {segments.map((seg, i) => {
        const isLast = i === segments.length - 1
        return (
          <span key={i} className="flex items-center space-x-1">
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            {isLast ? (
              <span className="font-semibold text-gray-900 dark:text-white">
                {seg.label}
              </span>
            ) : (
              <Link
                href={seg.href}
                className="hover:underline text-blue-500 dark:text-blue-400 capitalize"
              >
                {seg.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
