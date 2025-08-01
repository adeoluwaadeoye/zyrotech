export const categories = [
  {
    slug: 'phones',
    name: 'Phones',
    description: 'Explore the latest smartphones with cutting-edge features and sleek designs.',
  },
  {
    slug: 'laptops',
    name: 'Laptops',
    description: 'Discover high-performance laptops for work, study, and play.',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    description: 'Complete your setup with chargers, cases, headphones, and more.',
  },
] as const

export type Category = typeof categories[number]
export type CategorySlug = Category['slug']
