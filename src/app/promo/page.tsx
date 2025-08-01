import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function PromoPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
          Power Meets Precision. <br className="hidden sm:inline" />
          <span className="text-blue-500">Your Next Upgrade Starts Here.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg text-pretty">
          Discover limited-time deals on cutting-edge laptops, smartphones, and accessories.
          Curated just for Nigerian tech lovers.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/category/phones">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition">
              Shop Phones
            </Button>
          </Link>
          <Link href="/category/laptops">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-700"
            >
              Shop Laptops
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <PromoCard
            title="iPhone 14 Pro"
            image="/images/products/iphone-14-pro.jpg"
            description="The future is in your hands. Super Retina XDR display. Cinematic mode. Now ₦720,000."
            href="/product/iphone-14-pro"
          />
          <PromoCard
            title="MacBook Air M2"
            image="/images/products/macbook-air-m2.jpg"
            description="Sleek. Silent. Supercharged. The ultimate laptop for work and play. From ₦1,200,000."
            href="/product/macbook-air-m2"
          />
          <PromoCard
            title="Noise-Canceling Headphones"
            image="/images/products/headphones.jpg"
            description="Immersive sound, pure comfort. A must-have for creators and commuters. Just ₦65,000."
            href="/product/headphones"
          />
        </div>
      </div>
    </section>
  )
}

function PromoCard({
  title,
  image,
  description,
  href
}: {
  title: string
  image: string
  description: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="bg-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition transform shadow-md hover:shadow-lg flex flex-col h-full"
    >
      <div className="relative w-full h-56 sm:h-64 md:h-60 lg:h-52">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-90 hover:opacity-100 transition rounded-t-2xl"
        />
      </div>
      <div className="p-4 space-y-2 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <span className="text-blue-400 font-medium mt-2 block">View Offer →</span>
      </div>
    </Link>
  )
}
