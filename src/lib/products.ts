// src/lib/products.ts

import rawProducts from '@/data/products.json'
import { Product } from '@/types'
import { CategorySlug } from '@/lib/categories'

const products: Product[] = rawProducts.map((p) => ({
  ...p,
  price: Number(p.price),
  category: p.category as Product['category'],
}))

export function getAllProducts(): Product[] {
  return products
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategorySlug(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug)
}
