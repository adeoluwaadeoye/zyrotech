
"use client";

import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Payment Successful!</h1>
        <p className="text-lg mb-6">
          Thank you for your purchase. A confirmation has been sent to your email.
        </p>
        <Link href="/products" className="text-blue-400 underline">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
