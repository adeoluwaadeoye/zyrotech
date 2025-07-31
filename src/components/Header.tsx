"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, PhoneCall, LogIn } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import products from "@/data/products.json";

const navLinks = [
  { name: "Shop", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || searchOpen ? "hidden" : "auto";
  }, [mobileMenuOpen, searchOpen]);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-700 shadow-md bg-zinc-50 dark:bg-[#0d1117]">
      {/* Header Top */}
      <div className="bg-blue-50 dark:bg-zinc-800 text-sm text-blue-700 dark:text-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            <p className="text-center sm:text-left">
              🚚 Free shipping on orders over ₦500,000
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="tel:+2348140898790"
                title="+2348140898790"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <PhoneCall className="w-4 h-4" /> Support
              </Link>

              <Link
                href="/login"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <LogIn className="w-4 h-4" /> Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          ZyroTech
          <span className="hidden sm:inline text-blue-600 text-sm font-normal ml-2">
            | Smart Tech Deals, Delivered
          </span>
        </Link>

        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
          >
            <Search className="w-5 h-5" />
          </button>

          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as="div"
            className="lg:hidden fixed inset-0 z-50"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-64 bg-slate-50 dark:bg-zinc-900 shadow-lg p-6"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  Menu
                </span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
              <nav className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Cart ({cartCount})
                </Link>
              </nav>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <Dialog
            as="div"
            className="fixed inset-0 z-[60]"
            open={searchOpen}
            onClose={() => setSearchOpen(false)}
          >
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 inset-x-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-4 py-12 shadow-md"
            >
              <div className="flex justify-between items-center">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full p-2 text-sm rounded border dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                />
                <button className="ml-2" onClick={() => setSearchOpen(false)}>
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              {query && (
                <ul className="mt-4 max-h-80 overflow-y-auto divide-y divide-gray-200 dark:divide-zinc-700">
                  {filtered.length > 0 ? (
                    filtered.map((product) => (
                      <li key={product.id}>
                        <Link
                          href={`/product/${product.slug}`}
                          onClick={() => setSearchOpen(false)}
                          className="block p-3 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                        >
                          <p className="font-medium text-gray-800 dark:text-white">
                            {product.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                            {product.description}
                          </p>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-500 dark:text-gray-400 p-3">
                      No results found.
                    </li>
                  )}
                </ul>
              )}
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
