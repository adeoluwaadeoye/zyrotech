'use client';

import { FaShippingFast, FaShieldAlt, FaHeadset, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    title: 'Fast Nationwide Delivery',
    description: 'Get your orders delivered anywhere in Nigeria within 1–3 business days.',
    icon: <FaShippingFast className="text-blue-600 w-6 h-6" />,
  },
  {
    title: '100% Authentic Products',
    description: 'We only stock genuine tech products from trusted global brands.',
    icon: <FaCheckCircle className="text-green-600 w-6 h-6" />,
  },
  {
    title: 'Secure Payment Options',
    description: 'Pay safely using Paystack, card, or transfer with full encryption.',
    icon: <FaShieldAlt className="text-yellow-500 w-6 h-6" />,
  },
  {
    title: 'Dedicated Support',
    description: 'Our customer support team is available 7 days a week to assist you.',
    icon: <FaHeadset className="text-purple-600 w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 bg-fixed bg-cover bg-center text-white border-t border-zinc-800"
      style={{
        backgroundImage: "url('/images/whychooseus-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Why Choose ZyroTech?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          We’re redefining online tech shopping in Nigeria. Here&apos;s what sets us apart:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-6 py-8 bg-zinc-900/80 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
