 export const products = [
 
    {
id: 1,
name: 'pleasing Serum',
price: 2700,
category: 'serums',
img: 'https://i.imgur.com/Vfgbtrk.jpeg',
stock: 15, 
description: 'Descubre nuestro suero especializado para pieles sensibles, una fórmula delicadamente equilibrada para calmar, hidratar y fortalecer la piel. Enriquecido con ingredientes suaves y sin fragancias fuertes, este serum ha sido diseñado para proporcionar una experiencia suave y reconfortante, dejando tu piel nutrida, radiante y protegida. ¡Mima tu piel sensible con cuidado experto! '
},
{
id: 2,
name: 'pleasing Cleanser',
price: 1350,
category: 'cleansers',
img: 'https://i.imgur.com/Vfgbtrk.jpeg',
stock: 10, 
description: 'serum para pieles sensibles'
},
{
id: 3,
name: 'pleasing Sunscreen',
price: 1680,
category: 'sunscreens',
img: 'https://i.imgur.com/Vfgbtrk.jpeg',
stock: 8, 
description: 'serum para pieles sensibles'
},
]

export const getProducts = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise ((res, rej) => 
        setTimeout(() => {
            res(products.filter(prod => prod.category === category))
        }, 200)
    )
}


export const getProductsById = (id) =>{
    return new Promise((res, rej) =>
    setTimeout(() => {
        res(products.find(prod => prod.id.toString() === id))
    }, 200))
}
