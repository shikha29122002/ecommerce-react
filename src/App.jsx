import React, { useState } from 'react'
import Header from './Components/Header'
import {products} from '../products'
import Productlist from './Components/Productlist'
import Cart from './Components/Cart'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/home/Home'
import CartPage from './Components/Cart'
import './App.css'

const App = () => {
  const[cart, setCart]= useState([])

  const addCart = (product)=>{
    setCart((prevCart)=>{
      const itemsInCart = prevCart.find(item =>item.id == product.id)
      if (itemsInCart){
        return prevCart.map(item => item.id == product.id ? {...item, quantity:item.quantity+1}:item)
      }
      return[...prevCart,{...product,quantity:1}]
    })
  }
   const deleteCart =(id)=>{
    setCart((prevCart)=> prevCart.filter(item => item.id !=id))
   }
   const updateQuantity =(id,quantity)=>{
    console.log(quantity)
    setCart(prevCart =>prevCart.map(item=>item.id == id ?{...item, quantity: Math.max(1,quantity)}:item))
   }

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home products={products}  addCart={addCart}/>}></Route>
      <Route path='/cart/'element={<CartPage deletCart={deleteCart} updateQuantity={updateQuantity}Cart={cart}/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App