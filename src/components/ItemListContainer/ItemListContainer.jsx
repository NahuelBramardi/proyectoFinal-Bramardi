import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const ItemListContainer = ({greetingMessage}) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])


const {category} = useParams()



useEffect(() => {
  setLoading(true)
  const productsRef = category
? query(collection(db, 'products'), where('category', '==', category))
: collection(db, 'products')

getDocs(productsRef)
.then(snapshot => {
  const productsDeconstructed = snapshot.docs.map(doc => {
    const data = doc.data()
    return{id: doc.id, ...data}

  })

  setProducts(productsDeconstructed)

}).finally(() => {
  setLoading(false)
})
//  const fetchProducts = async () =>{
//     try {
//       setLoading(true);
//       const result = category
//       ? await getProductsByCategory(category)
//       : await getProducts();
//       setProducts(result);
//     } catch(error){
//       console.error("error en el fetch", error);
//     } finally{
//       setLoading(false);
//     }
//   }

    // fetchProducts();
  }, [category])

  
  return (
    <div>
      {loading? <div>Cargando...</div>:
      <ItemList products={products}/>
      }
      
    </div>
    
   )
}

export default ItemListContainer