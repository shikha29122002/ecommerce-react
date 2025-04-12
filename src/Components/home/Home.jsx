import React from 'react'
import Header from '../Header'
import Productlist from '../Productlist'

const Home = ({products, addCart}) => {
  return (
    <>
    <Header/>
    <Productlist products={products} addCart={addCart}/>
    </>
  )
}

export default Home