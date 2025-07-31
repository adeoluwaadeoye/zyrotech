'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    slug: 'iphone-14-pro-max',
    name: 'iPhone 14 Pro Max',
    image: '/images/iphone-14-carousel.jpg',
    highlight: 'Super Retina XDR Display with ProMotion, A16 Bionic chip',
    price: 785000,
  },
  {
    id: 2,
    name: 'Dell XPS 13',
    slug: 'dell-xps-13',
    image: '/images/dell-xpx-13.jpg',
    highlight: '13.4" UHD+, 11th Gen Intel Core i7, 16GB RAM, 512GB SSD',
    price: 645000,
  },
  {
    id: 3,
    name: 'Anker Soundcore Earbuds',
    slug: 'anker-soundcore-earbuds',
    image: '/images/soundcore-carousel.jpg',
    highlight: 'Clear audio, noise cancellation, 32-hour battery life',
    price: 25000,
  },
]

function AutoplayPlugin(run = true, interval = 8000) {
  return (slider: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>
    let mouseOver = false

    const clearNextTimeout = () => clearTimeout(timeout)
    const nextTimeout = () => {
      clearTimeout(timeout)
      if (mouseOver || !run) return
      timeout = setTimeout(() => slider.next(), interval)
    }

    slider.on('created', () => {
      slider.container.addEventListener('mouseover', () => {
        mouseOver = true
        clearNextTimeout()
      })
      slider.container.addEventListener('mouseout', () => {
        mouseOver = false
        nextTimeout()
      })
      nextTimeout()
    })

    slider.on('dragStarted', clearNextTimeout)
    slider.on('animationEnded', nextTimeout)
    slider.on('updated', nextTimeout)
  }
}

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [instanceRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 24 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [AutoplayPlugin()]
  )

  return (
    <section className="bg-[#0f1a2b] dark:bg-[#0f1a2b] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Featured Tech Deals
        </h2>

        <div ref={instanceRef} className="keen-slider">
          {products.map((product, i) => (
            <div key={i} className="keen-slider__slide px-4">
              <div className="flex flex-col md:flex-row items-center justify-center bg-[#1a2538] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition hover:scale-[1.01] min-h-[400px]">
                <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6 md:mb-0 md:mr-10 shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded-xl object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
                    {product.highlight}
                  </p>
                  <p className="text-blue-400 font-semibold mt-4 text-xl">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <Link
                    href={`/product/${product.slug}`}
                    className="inline-block mt-5 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition text-sm font-medium"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        {loaded && slider.current && (
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(slider.current.track.details.slides.length).keys()].map((idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === idx
                    ? 'bg-blue-600'
                    : 'bg-blue-300 dark:bg-blue-500'
                }`}
              />
            ))}
          </div>
        )}

        {/* Navigation Controls */}
        {loaded && slider.current && (
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={() => slider.current?.prev()}
              className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="p-3 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
