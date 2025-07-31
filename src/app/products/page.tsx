'use client'

import { useState, useEffect, useRef } from 'react'
import products from '@/data/products.json'
import BreadCrumb from '@/components/BreadCrumb'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@/types'

const PRODUCTS_PER_PAGE = 8

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [currentPage, setCurrentPage] = useState(1)
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([])
  const gridRef = useRef<HTMLDivElement>(null)

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE)

  useEffect(() => {
    const newProducts = products
      .slice(0, currentPage * PRODUCTS_PER_PAGE)
      .map((product) => ({
        ...product,
        category: product.category.toLowerCase() as 'phones' | 'laptops' | 'accessories',
      }))

    setVisibleProducts(newProducts)
  }, [currentPage])

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1)
    setTimeout(() => {
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }
    }, 100)
  }

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <BreadCrumb />

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        All Products
      </h1>

      <AnimatePresence mode="wait">
        <motion.section
          key={currentPage}
          ref={gridRef}
          id="product-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {visibleProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-neutral-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="relative w-full aspect-[4/3] bg-neutral-100 dark:bg-zinc-800">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority
                  />
                </div>
              </Link>

              <div className="p-4 flex flex-col justify-between h-full">
                <div className="flex flex-col gap-1 mb-3">
                  <Link href={`/product/${product.slug}`}>
                    <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {product.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <p className="font-bold text-blue-600 dark:text-blue-400">
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </AnimatePresence>

      {currentPage < totalPages && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}
