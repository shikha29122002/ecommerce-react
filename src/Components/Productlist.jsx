import React from 'react'

const Productlist = ({products,addCart}) => {
  
  return (
    <div className='container my-5'>
        <h1 className="text-primary my-3"> Featured 
            Products</h1>
            <div className="row">
            {products.map(product=>(
                <div key={product.id}
                 className="col-md-4">
                        <div className="card" style={{width: "18rem"}}>
  <img src={product.image}className="card-img-top image-fluid object-fit-cover"style={{height: "20rem"}} alt="..."/>
  <div className="card-body d-flex justify-content-between">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">${product.price}</p>
    <div className='btn-container d-flex gap-3'>
    <a onClick={()=> addCart(product)} href="#" className="btn btn-primary ">Add to Card</a>
    <a href="#" className="btn btn-dark">buy now  </a>
  </div>
</div>
                </div>
            </div>
            ))}
    </div>
    </div>
  )
}

export default Productlist