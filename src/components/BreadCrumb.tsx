'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BreadCrumb() {
  const pathname = usePathname()

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((seg, index, arr) => {
      let href = '/' + arr.slice(0, index + 1).join('/')
      let label = seg

      // ✅ Normalize 'product' -> 'products' for breadcrumb link
      if (seg === 'product') {
        href = '/products'
        label = 'Products'
      }

      // Capitalize label
      label = label.charAt(0).toUpperCase() + label.slice(1)

      return { href, label }
    })

  return (
    <nav className="mb-4 text-sm text-gray-600 dark:text-gray-300">
      <ol className="flex space-x-2">
        <li>
          <Link href="/" className="hover:underline text-blue-500 dark:text-blue-400">
            Home
          </Link>
        </li>
        {segments.map((seg, i) => (
          <li key={i} className="flex items-center space-x-2">
            <span className="mx-1">/</span>
            <Link
              href={seg.href}
              className="hover:underline text-blue-500 dark:text-blue-400 capitalize"
            >
              {seg.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
