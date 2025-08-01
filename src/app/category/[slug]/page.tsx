import { getProductsByCategory } from '@/lib/products'
import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import CategoryBreadcrumb from '@/components/CategoryBreadcrumb'
import { notFound } from 'next/navigation'

const validCategories = ['phones', 'laptops', 'accessories'] as const
type Category = typeof validCategories[number]

type PageProps = {
  params: { slug: string }
}

// export default async function Page(props: PageProps) {
//   const { slug } = await props.params // ✅ async destructuring

//   if (!validCategories.includes(slug as Category)) {
//     notFound()
//   }

//   const products = await getProductsByCategory(slug as Category)

//   return (
//     <section className="p-4">
//       <CategoryBreadcrumb />

//       <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white capitalize">
//         {slug}
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product: Product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   )
// }


export default async function Page({ params }: PageProps) {
  const { slug } = params

  if (!validCategories.includes(slug as Category)) {
    notFound()
  }

  const products = await getProductsByCategory(slug as Category)

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
