'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { useCart } from '@/context/CartContext'


type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()

  return (
    <section className="px-4">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full min-h-[420px]">
        <Link href={`/product/${product.slug}`}>
          <div className="relative w-full h-48">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>

        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-semibold text-neutral-800 dark:text-white mb-1">
            {product.title}
          </h2>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 line-clamp-2">
            {product.description}
          </p>

          <div className="mt-auto">
            <p className="text-lg font-bold text-blue-600 dark:text-emerald-400 mb-2">
              ₦{product.price.toLocaleString()}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
