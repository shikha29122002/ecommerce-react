import React from 'react'
import Header from '../Header'
import Carts from '../Carts'

const CartPage = ({cart, deletCart,updateQuantity}) => {
  return (
    <>
    <Header/>
    <Carts cart={cart} updateQuantity={updateQuantity} deletCart={deletCart}/>
    </>
  )
}

export default CartPage