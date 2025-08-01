export interface Product {
  id: number
  slug: string
  title: string
  description: string
  shortDescription: string
  image: string
  price: number
  category: 'phones' | 'laptops' | 'accessories'
}

export interface CartItem extends Product {
  quantity: number
}

export type Category = "phones" | "laptops" | "accessories"
