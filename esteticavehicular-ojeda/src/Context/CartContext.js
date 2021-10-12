import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);


    const addItems = (item, quantity) => {
        if (!isInCart(item.id)) {

            setItems([...items, item]);

        }
    }

    const isInCart = (itemId) => {
        return items.some(x => x.id === itemId)
    }

    const clear = () => {
        setItems([]);
    }

    const removeItem = (itemId) => {
        let aux = items.filter(x => x.id != itemId)
        setItems(aux);
    }

    const data = { items, addItems, isInCart, clear, removeItem, cartSize: items.length };
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;