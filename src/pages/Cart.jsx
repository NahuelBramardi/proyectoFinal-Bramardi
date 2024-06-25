import React, { useContext } from 'react'
import { CartContext } from '../components/context/CartContext'
import { Link, Navigate } from 'react-router-dom'

const Cart = () => {
    const {cart, cartTotal, emptyCart, removeItem} = useContext(CartContext)
   
  if(cart. length > 0)
  return(
  <div>
    <h2>Tus productos:</h2>
    {
       
        <>
    
    {
        cart.map((item) =>(
    
    <div>
            <>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <img src={item.img}/>
            <p>Cantidad: {item.cantidad}</p>
            <div><button onClick={()=>removeItem(item.id)}>remover art.</button></div>
</>
    </div>
        
        ))
    }
    </>
    }

    <h3>Tu total es: ${cartTotal()}</h3>
    
    
    <div><button><Link to={`/checkout`}>Proceder a compra.</Link></button></div>
    <div><button onClick={()=>emptyCart()}>VACIAR CARRITO.</button></div>
  
  
  </div>
)
    
else{

return 'Tu carrito esta VACIO.'

}}
 

export {Cart}