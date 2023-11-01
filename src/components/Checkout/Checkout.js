import React, { useContext, useState } from "react";

import { db } from "../../services/firebase/firebaseConfig"
import { CartContext } from "../context/CartContext";
import { Timestamp, collection } from "firebase/firestore";
import { writeBatch } from "firebase/firestore";

import CheckoutForm from "../CheckoutForm/ChekoutForm";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const objOrder = {
                buyer: {
                    name,
                    phone,
                    email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db);

            //LOGICA PARA EL CHECKOUT

        } catch (error) {
            console.error("Error creando la orden:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <CheckoutForm onSubmit={createOrder} />
        </div>
    );
}

export default Checkout;
