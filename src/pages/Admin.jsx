import React from 'react'
import { products } from '../assets/asyncMock'
import { db } from '../services/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const productsRef = collection (db, 'products')
const handleUpload=()=>{
    products.forEach((item) => {
        delete item.id
        addDoc(productsRef, item)
    })
}

const Admin = () => {
    return (
        <div onClick={()=>handleUpload()}>cargar productos.</div>
    )
}

export {Admin}