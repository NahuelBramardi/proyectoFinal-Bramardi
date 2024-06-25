import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <img src={product.img}></img>
    <p>{product.stock}</p>
    <Link to={`/product/${product.id}`}>Detalles del producto.</Link>

    </div>
  )
}

export {Item}