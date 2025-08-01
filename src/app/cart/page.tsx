"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/types";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";


export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (count: number, item: CartItem) => count + item.quantity,
    0
  );

  const router = useRouter();


  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 🛒</h2>
        <Link href="/products" className="text-blue-600 hover:underline">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 relative">
      {/* Optional close button if modal/drawer */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-12 right-4 text-gray-500 hover:text-black dark:hover:text-white"
        aria-label="Close cart"
      >
        <X className="w-7 h-7 p-1 rounded-full bg-blue-600 text-white" />
      </button>

      <div className="flex items-center justify-between mb-6 pt-12">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {totalItems} item{totalItems > 1 ? "s" : ""} in cart
        </p>
      </div>

      <div className="space-y-4">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white dark:bg-zinc-900 rounded-xl shadow p-4"
          >
            <div className="w-20 h-20 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.shortDescription}
              </p>
              <p className="text-green-600 font-bold mt-1">
                ₦{(item.price * item.quantity).toLocaleString()}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                >
                  −
                </button>
                <span className="font-medium">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="pt-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl font-semibold">
            Total:{" "}
            <span className="text-green-700">₦{total.toLocaleString()}</span>
          </p>

          <button
            onClick={clearCart}
            className="text-red-500 text-sm hover:underline"
          >
            Remove all items
          </button>
        </div>
      </div>

      {/* Bottom Checkout Button */}
      <Link href="/checkout">
        <div className="mt-6">
          <button
            disabled={cartItems.length === 0}
            className="w-full bg-zinc-900 text-white py-3 rounded-lg hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </Link>
    </div>
  );
}
