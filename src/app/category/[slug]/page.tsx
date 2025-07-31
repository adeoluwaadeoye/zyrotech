// app/category/[slug]/page.tsx
import { getProductsByCategory } from '@/lib/products'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import CategoryBreadcrumb from '@/components/CategoryBreadcrumb'

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params

  const validCategories = ['phones', 'laptops', 'accessories'] as const
  type Category = typeof validCategories[number]

  if (!validCategories.includes(slug as Category)) {
    return <div className="p-4 text-red-500 font-semibold">Invalid category</div>
  }

  const products = getProductsByCategory(slug as Category)

  return (
    <section className="p-4">
      <CategoryBreadcrumb />

      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white capitalize">
        {slug}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
