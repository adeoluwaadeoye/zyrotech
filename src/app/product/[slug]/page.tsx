import { getProductBySlug } from '@/lib/products'
import AddToCartButton from '@/components/AddToCartButton'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import BreadCrumb from '@/components/BreadCrumb'

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)

  if (!product) return notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb outside the grid */}
      <BreadCrumb />

      {/* Grid for image and product details */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Product Image */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-neutral-100 dark:bg-zinc-800 rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {product.title}
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            ₦{product.price.toLocaleString()}
          </p>

          <AddToCartButton product={product} />
        </div>
      </section>
    </div>
  )
}
