import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import {Button} from '../Button/Button'
import { Link } from 'react-router-dom'


const ItemDetail = ({product}) => {

  const [counter, setCounter] = useState(1)

  const {addToCart, cart, isInCart} = useContext(CartContext)

  const handleAdd = () =>{
    setCounter(counter+1)

  }
  const handleSubstract = () =>{
    if(counter > 1){
      setCounter(counter-1)
    }
  }
  const handleAddToCart = () =>{
    const newItem = {...product, cantidad: counter}
    addToCart(newItem)
  }

  return (
   
   <>
     {product &&
      <>
      <div className='flex'>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
      <img src={product.img}/>
      {   
         isInCart(product.id)
         ? 
          <Link to='/cart'><Button label='Ir al carrito.' callback={handleAdd}/></Link>
         :
  <>
      <Button label='-'callback={handleSubstract} />
       <div>Cantidad: {counter}</div>
       <Button label='+' callback={handleAdd}/>
      <Button label='Agregar a carrito.' callback={handleAddToCart}/>
  </>
}
      
      
      </>
    }</>
    )}



export {ItemDetail}