import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartItem.css";




const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveItem = () => {
        removeItem(id);
    };

    return (
        <div className="CartItem">
            <div>
                <h4>{name}</h4>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <button className="RemoveButton" onClick={handleRemoveItem}>Eliminar Item</button>
        </div>
    );
};

export default CartItem;
