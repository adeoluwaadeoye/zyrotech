import rawProducts from '@/data/products.json'
import { Product } from '@/types'

const products: Product[] = rawProducts.map((p) => ({
  ...p,
  price: Number(p.price),
  category: p.category as Product['category']
}))

export function getAllProducts(): Product[] {
  return products
}

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category)
}
