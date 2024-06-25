import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../assets/asyncMock'
import { useNavigate, useParams } from 'react-router-dom'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../services/firebaseConfig';

    const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
      const productsRef = doc(db, 'products', id)
        getDoc(productsRef)
        .then(snapshot => {
        const data = snapshot.data()
        const productDeconstructed = {id: snapshot.id, ...data}
        setProduct(productDeconstructed)
    }) 
    }, [id])
  
    return (
    <>
    { id &&
     <ItemDetail product={product}/>
    }   
    </>
  )
}

export default ItemDetailContainer