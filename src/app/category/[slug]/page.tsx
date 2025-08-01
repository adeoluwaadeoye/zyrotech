import { notFound } from 'next/navigation'
import { getProductsByCategorySlug } from '@/lib/products'
import { categories } from '@/lib/categories'
import ProductCard from '@/components/ProductCard'
import { Product } from '@/types'
import BreadCrumb from '@/components/BreadCrumb'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return categories.map(category => ({ slug: category.slug }))
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { slug } = await params

  const category = categories.find(cat => cat.slug === slug)
  if (!category) return notFound()

  const products = getProductsByCategorySlug(category.slug)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <BreadCrumb />

      {/* Header */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {category.name}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl text-base sm:text-lg mx-auto sm:mx-0">
          {category.description}
        </p>
      </div>

      {/* Products */}
      {products.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center">
          No products in this category yet.
        </p>
      ) : (
        <div className="grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
