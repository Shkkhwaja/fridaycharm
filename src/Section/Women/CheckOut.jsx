import React from 'react'
import { useCart } from "react-use-cart";


export default function CheckOut() {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div className='h-screen w-full bg-gray-600'>
      <h2>Check Out : {cartTotal}</h2>
    </div>
  )
}
