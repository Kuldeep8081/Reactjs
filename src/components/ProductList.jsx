import React from 'react'

const ProductList = () => {

  const products=[
    {
        id:1,
        name:"Laptop",
        price:"$699",
    }
  ]
  return (
    <div>
        {
            products.map(product=>(
                <ul key={product.id}>
                    <li>{product.name}</li>
                    <li>{product.price}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default ProductList