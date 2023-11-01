import "./Item.css"
import React from 'react'
import { Link } from "react-router-dom"

function Item  ({id, name, img, price, stock}) {
    return (
        <article className = "CardItem">
            <header className="Header">
            <h2 className="itemHeader">
            {name}
            </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            
            <section>
            <p className="Info">
                Precio: ${price}
            </p>
            <p className="Info">
            Stock Disponible: {stock}
            </p>
            </section>
            <footer className="ItemFooter">
            <Link to={`/item/${id}`} className="Option">Ver Detalle</Link>
            </footer>
        </article>
        
    )

}

export default Item;