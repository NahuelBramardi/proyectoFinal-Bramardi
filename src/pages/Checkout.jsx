import React, { useContext, useState } from 'react'
import { CartContext } from '../components/context/CartContext'
import { Navigate } from 'react-router-dom'
import { addDoc, collection, count, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import { products } from '../assets/asyncMock'
import {ItemDetail} from '../components/ItemDetail/ItemDetail'


const Checkout = () =>{
    const {cart, emptyCart, cartTotal, counter} = useContext(CartContext)
    
    const [orderID, setOrderID]  = useState(null)
   
    const [values, setValues] = useState({
        name: '',
        address: '',
        email: '',
    })

const handleInputChange = (e) =>{
     setValues({
        ...values,
         [e.target.name]: e.target.value
     })
    }

    const ordersRef = collection(db, 'orders')

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(values.name.length <3){
            alert('Por favor, ingresa un nombre válido.')
            return
        }if(values.address.length <8){
            alert('Dirección no válida. Revisa tus datos..')
            return
        }if(values.email.length <3){
            alert('Email no válido. Revisa tus datos.')
            return
        }

        const order = {
            cart,
            customerData: values,
            fyh: new Date(),
            total: cartTotal()
        }
        
        addDoc(ordersRef, order).then((doc)=>{
            setOrderID(doc.id)
            emptyCart()
        })
        .catch((error)=>console.log('Error al generar órden de compra.', error))

        
        cart.forEach((item) => {
            const docRef = doc(db, 'products', item.id)
            getDoc(docRef)
            .then((doc) =>{
                let dbStock = doc.data().stock
               
                if(dbStock - item.cantidad >=0){
                    updateDoc(docRef, {stock: dbStock - item.cantidad});
                    return(<div>Tu número de órden es el siguiente: {orderID}</div>)
                    
                }else{
                    alert('Parece que no hay el stock suficiente de ' + doc.data().name + '. La cantidad máxima que puedes añadir es de ' + dbStock+'.');
                    
                
                    
                 }
            })
        })
        
    } 

    // if(orderID){
    //     return(<div>Tu número de órden es el siguiente: {orderID}</div>)
    // }

    // if(cart.length ===0){
    //  return <Navigate to='/'/>
    // }

    
    const handleUpload=()=>{
        products.forEach((item) => {
            delete item.id
            addDoc(productsRef, item)
        })
    }

   

     return(
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            required
            placeholder='Nombre'
            name='name'
            onChange={handleInputChange}></input>
        
            <input
            type='text'
            required
            placeholder='Dirección'
            name='address'
            onChange={handleInputChange}/>
    
            <input
            type='email'
            required
            placeholder='Email'
            name='email'
            onChange={handleInputChange}/>
    
            <button type='submit'>Confirmar compra.</button>
            </form>
             </div>
           )}
        


         

         export {Checkout}