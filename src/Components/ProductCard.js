import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
<div class="product">
  <span class="product__price">{product.price}</span>
  <img class="product__image" src={product.image} />
  <h1 class="product__title">{product.name}</h1>
  <hr />
  <Link  to={`/detail/${product.id}`}>Buy Now</Link>
</div>
  )
}

export default ProductCard
