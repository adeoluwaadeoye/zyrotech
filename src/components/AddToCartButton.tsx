'use client'

import { Product } from '@/types'
import { useCart } from '@/context/CartContext'

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition"
    >
      Add to Cart
    </button>
  )
}
