import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"; 

import cart from "./assets/carrito.png";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (                   //falta el dysplay block o none
        <Link to="/cart" className="CartWidget" > 
            <img className="CartImg" src={cart} alt="cart-widget" />
            <p>{totalQuantity}</p>
            
        </Link>
    );
};

export default CartWidget;
