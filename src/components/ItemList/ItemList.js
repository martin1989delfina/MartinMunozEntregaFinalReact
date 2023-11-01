import React from 'react'
import Item from "../Item/Item"

function ItemList  ({products}) {
    console.log(products);
    return(
        <div className='listGrup'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}





export default ItemList;