"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircleMore,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvzyraq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Contact ZyroTech</h1>
      <p className="mb-6 max-w-2xl text-base leading-relaxed">
        Have a question or business inquiry? Our support team is available 24/7
        to assist with orders, product info, or partnerships.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              required
              name="message"
              placeholder="How can we help you?"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition disabled:opacity-50"
          >
            <Send size={16} />
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-sm font-medium">
              ✅ Message sent successfully! We&apos;ll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm font-medium">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Reach Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <Link href="tel:+2348100000000" className="hover:underline">
                  +234 810 000 0000
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:support@zyrotech.ng"
                  className="hover:underline"
                >
                  support@zyrotech.ng
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lagos, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <MessageCircleMore className="w-4 h-4 text-green-600" />
                <Link
                  href="https://wa.me/2348100000000"
                  target="_blank"
                  className="text-green-600 font-medium hover:underline"
                >
                  Chat on WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Social Media</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                <Link
                  href="https://facebook.com/zyrotech"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <Link
                  href="https://instagram.com/zyrotech"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <Link
                  href="https://linkedin.com/company/zyrotech"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Sell with Us</h2>
            <p className="text-sm leading-relaxed">
              Want to list your products on ZyroTech? Reach out to our seller
              team at{" "}
              <Link
                href="mailto:sellers@zyrotech.ng"
                className="text-blue-600 hover:underline"
              >
                sellers@zyrotech.ng
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Our Office</h2>
        <div className="w-full h-64 rounded overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7963004019784!2d3.379205!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d6eb2ff2b73%3A0x7adf6e0bbf7ec3b5!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1690020294550"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
