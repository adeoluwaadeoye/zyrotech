# ⚡ ZyroTech — Smart Gadgets Storefront

![Next.js](https://img.shields.io/badge/Next.js-13+-000?logo=nextdotjs&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Enabled-0055FF?logo=framer)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![MIT License](https://img.shields.io/badge/license-MIT-green)

ZyroTech is a **modern, mobile-first** dropshipping storefront built with **Next.js App Router**, **Tailwind CSS**, and **Framer Motion**. It's optimized for speed, simplicity, and responsive design — featuring a clean UI, dynamic product pages, an animated product catalog, and a cart with local persistence.

---

## 🚀 Live Demo

🌍 [Visit ZyroTech Store](https://your-vercel-deployment-url.vercel.app)

---

## 📦 Features

- ⚡ **Next.js App Router** with Server Components
- 🌙 **Dark/Light Theme Toggle**
- 🎯 **Animated Masonry Grid** with “Load More” functionality
- 🛒 **Cart System** with full `add/remove/update` support
- 💾 **Persistent Cart via localStorage**
- 📱 **Fully Responsive** from mobile to desktop
- 💳 **Dummy Checkout** (Paystack integration ready)
- ✉️ **Contact Form** (powered by Formspree)
- 🔍 **Category Filtering & Breadcrumb Navigation**
- ✨ **Framer Motion** Animations on scroll, card hover, and mount
- 🔒 **Email + Password Auth Ready** (sign up/log in UX scaffolded)

---

## 📂 Project Structure

```bash
.
├── app/                      # App Router Pages & Layout
├── components/               # Reusable UI Components
├── context/                  # Cart Provider (localStorage-enabled)
├── data/products.json        # Product Data
├── public/                   # Images & Assets
├── styles/                   # Global Styles
├── types/                    # Global TypeScript Interfaces
├── utils/                    # Utilities (e.g. currency formatter)
└── README.md
````

---

## 🛠️ Tech Stack

| Purpose    | Tool / Framework                |
| ---------- | ------------------------------- |
| Frontend   | Next.js 13+ (App Router)        |
| Styling    | Tailwind CSS 3.x                |
| Animations | Framer Motion                   |
| State Mgmt | React Context API               |
| Forms      | react-hook-form + Formspree     |
| Payments   | Paystack (via `react-paystack`) |
| Icons      | Lucide Icons                    |
| Fonts      | Geist via `next/font`           |

---

## 🧪 Getting Started

Install dependencies and start the dev server:

```bash
git clone https://github.com/your-username/zyrotech.git
cd zyrotech

# Install packages
npm install

# Start dev server
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Customization Guide

| Task                      | File/Directory                           |
| ------------------------- | ---------------------------------------- |
| Add/Remove Products       | `data/products.json`                     |
| Update Layout or Pages    | `app/` + `components/`                   |
| Adjust Styling/Theming    | `tailwind.config.js`                     |
| Change SEO / Metadata     | `app/layout.tsx` or individual routes    |
| Enable Real Checkout      | `components/CheckoutForm.tsx` (Paystack) |
| Update Contact Form Email | `components/ContactForm.tsx` (Formspree) |

---

## 📦 Deployment

### ✅ Deploy on Vercel

Click to deploy instantly with default settings:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=next.js)

Or manually:

```bash
npm run build
npm start
```

---

## 🖼️ Sample Product Schema

```ts
// types/index.ts
export interface Product {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  price: number
  category: 'phones' | 'laptops' | 'accessories'
  slug: string
}
```

```json
// data/products.json
{
  "id": 3,
  "title": "HP Pavilion x360",
  "shortDescription": "Convertible touchscreen laptop",
  "description": "A powerful, portable laptop with 360° hinge, 11th Gen Intel, 8GB RAM, and a 512GB SSD. Perfect for work and play.",
  "image": "/products/hp-x360.jpg",
  "price": 450000,
  "category": "laptops",
  "slug": "hp-pavilion-x360"
}
```

---

## 🎯 Example UI Flow

1. Browse products by category
2. View detailed specs on product pages
3. Add item to cart
4. View cart with editable quantity
5. Checkout with dummy payment
6. Submit order details via Formspree

---

## 🧱 Custom-Built Features

* 🧮 `CartContext` with localStorage syncing
* 🧩 Product Masonry Grid Layout with `Load More` button
* 🌀 `Framer Motion` animations for grid, cards, and transitions
* 🧾 Reusable components like `Header`, `Footer`, `Breadcrumb`, `ProductCard`
* 🗂️ Typed product schema for strong typing and scalability
* 📱 Swipe gestures and scroll lock for drawers (Framer + Headless UI)

---

## 🧠 Future Enhancements

* 🔍 Live product search with debounce
* 🛒 Real payment support (Stripe, Flutterwave)
* 🔐 Supabase/Clerk-based user auth
* 📊 Admin dashboard for orders/products
* 📦 API routes + webhook integration

---

## 📝 License

MIT © 2025 [ZyroTech](https://yourdomain.com)

---

## 🙌 Acknowledgments

Built with ❤️ by Nexcraft Digital. Powered by [Next.js](https://nextjs.org), [TailwindCSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).

```

---

✅ **No fragments.**  
✅
```
