"use client";

import { PaystackButton } from "react-paystack";

interface Props {
  name: string;
  email: string;
  phone: string;
  address: string;
  amount: number;
  onSuccess: () => void;
}

export default function PayWithPaystack({
  name,
  email,
  phone,
  address,
  amount,
  onSuccess,
}: Props) {
  const publicKey = "pk_test_9df5597dd08197708b0cd54ae43bf3bd548ff225";

  const componentProps = {
    email,
    amount,
    metadata: {
      custom_fields: [
        {
          display_name: "Full Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone",
          value: phone,
        },
        {
          display_name: "Delivery Address",
          variable_name: "address",
          value: address,
        },
      ],
    },
    publicKey,
    text: "Pay with Paystack",
    onSuccess,
    onClose: () => alert("Payment cancelled"),
  };

  return (
    <PaystackButton
      {...componentProps}
      className="w-full bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-3 rounded-md transition duration-300"
    />
  );
}
