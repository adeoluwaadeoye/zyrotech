import { getProductBySlug } from '@/lib/products'
import AddToCartButton from '@/components/AddToCartButton'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import BreadCrumb from '@/components/BreadCrumb'

interface PageProps {
  params: { slug: string }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params // ✅ required for Next 14+

  const product = await getProductBySlug(slug)

  if (!product) return notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <BreadCrumb />

      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative w-full h-[400px] md:h-[500px] bg-neutral-100 dark:bg-zinc-800 rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

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
