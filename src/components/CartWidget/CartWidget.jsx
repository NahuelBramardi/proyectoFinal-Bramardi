import React, { useContext } from 'react'
import { IoIosCart } from "react-icons/io";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
const CartWidget = () => {

  const {cartQuantity} = useContext(CartContext)

  return (
    <div>
        <Link to={`/cart`}><IoIosCart /></Link>
        <span>{cartQuantity()}</span>
    </div>
  )
}

export {CartWidget}