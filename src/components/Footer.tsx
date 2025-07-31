"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#1a1a1a] text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <div
        className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4
 gap-y-10 gap-x-8 text-left"
      >
        {/* Company Info */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            GADGETS
          </h2>
          <p>
            Your trusted store for premium phones, laptops, and accessories.
            Dropshipped. Simplified.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <FaFacebookF size={18} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-red-600"
            >
              <FaYoutube size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#products" className="hover:underline">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Support
          </h3>
          <ul className="space-y-1">
            <li>
              <Link href="/contact" className="hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#0" className="hover:underline">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#0" className="hover:underline">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="#0" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
            Stay Updated
          </h3>
          <p className="mb-4">
            Join our mailing list for updates on new drops and offers.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              required
              aria-label="Email address"
              className="w-full px-3 py-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 text-center py-4 text-xs text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} GADGETS. All rights reserved.
      </div>
    </footer>
  );
}
