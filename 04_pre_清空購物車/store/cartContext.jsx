import React from "react";

const CartContext = React.createContext({
    products: [],
    totalAmount: 0,
    totalPrice: 0,
    addItem: () => {
    },
    removeItem: () => {
    },
    removeAll: () => {  
    }
});

export default CartContext;