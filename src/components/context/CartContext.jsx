import React from 'react';
import { createContext, useState } from "react";
import {ItemCount} from "../ItemCount/ItemCount";

export const CartContext = createContext()
export const CartContextProvider = ({children}) =>
{ 
    const [cart, setCart] = useState([])
    
    const addToCart = (item) =>{
        setCart([...cart, item])
    }
    
    const isInCart = (id) =>{
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () =>{
        return cart.reduce((acc, item) => acc+item.cantidad * item.price, 0)
    }

    const emptyCart = () =>
    {setCart([])}

    const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
    }


    return (
    
    <CartContext.Provider value={{
       
        cart, 
        setCart, 
        addToCart, 
        isInCart, 
        cartQuantity, 
        cartTotal, 
        emptyCart, 
        removeItem}}>
    
        {children}
     
     </CartContext.Provider>
    )
}



