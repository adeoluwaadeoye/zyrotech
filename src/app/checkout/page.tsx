'use client'

import { useForm } from 'react-hook-form'
import { useCart } from '@/context/CartContext'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// Lazy-load PayWithPaystack to prevent "window is not defined" error
const PayWithPaystack = dynamic(() => import('@/components/PayWithPaystack'), {
  ssr: false,
})

type FormData = {
  name: string
  email: string
  phone: string
  address: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, clearCart } = useCart()
  const [formData, setFormData] = useState<FormData | null>(null)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handleSuccess = async () => {
    try {
      await fetch('https://formspree.io/f/mwkgvqek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          order: cartItems.map((item) => ({
            title: item.title,
            quantity: item.quantity,
            price: item.price,
          })),
          totalAmount,
        }),
      })

      clearCart()
      setPaymentSuccess(true)
    } catch (error) {
      console.error('Form submission failed:', error)
    }
  }

  useEffect(() => {
    if (paymentSuccess) {
      router.push('/thank-you')
    }
  }, [paymentSuccess, router])

  const onSubmit = (data: FormData) => {
    setFormData(data)
    setShowPayment(true)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-8 text-center">Proceed to Pay</h1>

      {!showPayment ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white shadow-lg rounded-lg p-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register('name', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              {...register('phone', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">Phone is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Address
            </label>
            <textarea
              rows={3}
              {...register('address', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">Address is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            Continue to Payment
          </button>
        </form>
      ) : (
        formData && (
          <div className="bg-white shadow-md rounded-lg p-6 mt-8 text-center">
            <h2 className="text-xl font-semibold mb-6">
              Pay{' '}
              <span className="text-green-600">
                ₦{totalAmount.toLocaleString()}
              </span>
            </h2>
            <PayWithPaystack
              name={formData.name}
              email={formData.email}
              phone={formData.phone}
              address={formData.address}
              amount={totalAmount * 100}
              onSuccess={handleSuccess}
            />
          </div>
        )
      )}
    </div>
  )
}
