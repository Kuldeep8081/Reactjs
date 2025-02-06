import React from 'react'

const ProductInfo = () => {

    const product={
        name: "Laptop",
        price: 1200,
        availability: "In Stock",
    };

  return (
    <div>
        <h1>Product Name: {product.name}</h1>
        <h2>Price: ${product.price}</h2>
        <h3>Availability: {product.availability}</h3>
    </div>
  )
}

export default ProductInfo