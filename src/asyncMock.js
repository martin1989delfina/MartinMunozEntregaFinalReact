const products = [
    {
        id: "1",
        name: "juego 1",
        price: 1000,
        category : "accion",
        img :"https://www.gamestorrents.fm/wp-content/uploads/2023/10/Beneath-Oresa-pc-free-download.jpg",
        stock: 25,
        descrption: "juego bla bla bla bla bla bla bla bla bla bla"
        
    },
    {
        id: "2",
        name: "juego 2",
        price: 900,
        category : "rol",
        img :"https://www.gamestorrents.fm/wp-content/uploads/2023/10/Beneath-Oresa-pc-free-download.jpg",
        stock: 25,
        descrption: "juego bla bla bla bla bla bla bla bla bla bla"
        
    },
    {
        id: "3",
        name: "juego 3",
        price: 1200,
        category : "estrategia",
        img :"https://www.gamestorrents.fm/wp-content/uploads/2023/10/Beneath-Oresa-pc-free-download.jpg",
        stock: 25,
        descrption: "juego bla bla bla bla bla bla bla bla bla bla"
        
    },
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
        resolve(products)
    },500)
})
}
export const getProductById =(productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory =(productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}