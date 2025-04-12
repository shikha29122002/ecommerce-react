import React from 'react'

const Cart = ({Cart, deletCart, updateQuantity}) => {
  const total = Cart.reduce ((total,item)=> total+item.price * item.quantity,0)
  return(
    <div className='container w-75 shadow-lg border-1 p-2 border-dark border p-4 my-5'>
      {Cart.map(item =>(
 <div className='row my-3'>
  {console.log(item)}
         <div className='col-md-8 d-flex'>
           <img className='image-fluid object-fit-cover'
           style={{width:"100px", height:"120px"}} src ={`/${item.image}`} alt=""/>
         
         <div className='ms-3'>
           <h4>{item.title}</h4>
           <p>${item.price}</p>
         </div>
         </div>
         {console.log(item.quantity)}
 <div className='col offest-7'>
 <div className='quality-control'>
   <button onClick={()=>updateQuantity(item.id,item.quantity+1)}className='btn-sm btn btn-success'>+</button>
        <p className='px-2 mt-2 fs-4'>{item.quantity}</p>
   <button onClick={()=>updateQuantity(item.id,item.quantity-1)}  className='btn-sm btn btn btn-warning'>-</button>
   <button onClick={()=> deletCart(item.id)} className='btn-sm btn btn-danger'>Del</button>
 </div>
</div>
</div>
      ))}

      {Cart.length === 0 ?<h1 className="text-center mt-5"> there is no item in your carts !</h1>:<div className='summary my-2'>
      <h4 className='my-4'>Total Price: <small className="fw-normal">{total}</small></h4>
      <button className='btn-success btn text-center w-100'>checkout</button>
     </div>
}
     </div>
      
  )
}
export default Cart;