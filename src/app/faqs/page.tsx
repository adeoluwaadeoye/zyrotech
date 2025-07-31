'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  { category: 'Shipping', question: 'How long does delivery take?', answer: 'Delivery typically takes 1–3 business days within Nigeria. Outside Lagos, allow 3–5 business days depending on courier routes.' },
  { category: 'Shipping', question: 'Do you ship internationally?', answer: 'Currently, we only ship within Nigeria. International shipping will be added soon as we expand operations.' },
  { category: 'Orders', question: 'How can I track my order?', answer: 'Once your order is confirmed, you’ll receive a tracking number via email or SMS. You can track your order through the courier’s tracking portal.' },
  { category: 'Orders', question: 'Can I cancel or modify my order after placing it?', answer: 'If your order hasn’t been processed, you can cancel or modify it by contacting us immediately. Once shipped, changes are no longer possible.' },
  { category: 'Payments', question: 'What payment methods are accepted?', answer: 'We accept debit cards, bank transfers, and secure online payments via Paystack. Cash on delivery is currently not available.' },
  { category: 'Payments', question: 'Is it safe to make payments on your site?', answer: 'Absolutely. All transactions are encrypted and processed through secure gateways. We never store your card details.' },
  { category: 'Products & Warranty', question: 'Are the devices brand new?', answer: 'Yes. All products are 100% brand new, sealed, and sourced from authorized distributors.' },
  { category: 'Products & Warranty', question: 'Do you offer warranty on devices?', answer: 'Yes. All devices come with manufacturer warranty. For added peace of mind, we also offer support for returns within 7 days for defective items.' },
  { category: 'Returns & Refunds', question: 'What’s your return policy?', answer: 'Returns are accepted within 7 days of delivery if the product is faulty or damaged. Items must be unused and in original packaging.' },
  { category: 'Returns & Refunds', question: 'How do I initiate a return or refund?', answer: 'Contact our support team with your order ID and reason. Once approved, we’ll guide you through the return process.' }
]

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handlers = useSwipeable({
    onSwipedUp: () => {
      if (activeIndex !== null && activeIndex < filteredFaqs.length - 1) {
        setActiveIndex(activeIndex + 1)
      }
    },
    onSwipedDown: () => {
      if (activeIndex !== null && activeIndex > 0) {
        setActiveIndex(activeIndex - 1)
      }
    },
    delta: 10,
    trackTouch: true,
    trackMouse: false,
  })

  const categories = ['All', ...new Set(faqs.map((faq) => faq.category))]
  const filteredFaqs = selectedCategory === 'All' ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" {...handlers}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/faq-bg.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-zinc-100 dark:from-zinc-900/80 dark:to-black/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Frequently Asked Questions
        </h1>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'bg-transparent text-zinc-600 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm dark:shadow-none"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
              >
                <div className="text-left">
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
                    {faq.category}
                  </p>
                  <h2 className="font-semibold text-zinc-800 dark:text-white">
                    {faq.question}
                  </h2>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-zinc-500 transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 pt-0 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
