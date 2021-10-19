import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartSize, setCartSize] = useState(0);

    const addItems = (item) => {
        if (!isInCart(item.id)) {
            setItems([...items, item]);
            setTotalPrice(totalPrice + (item.price * item.quantity));
            setCartSize(cartSize + item.quantity)
        }
    }

    const isInCart = (itemId) => {
        return items.some(x => x.id === itemId)
    }

    const clear = () => {
        setItems([]);
    }

    const removeItem = (itemId) => {
        let itemAux = items.find(x => x.id == itemId)
        let aux = items.filter(x => x.id != itemId)
        setTotalPrice(totalPrice - (itemAux.price * itemAux.quantity));
        setCartSize(cartSize - itemAux.quantity)
        setItems(aux);
    }

    const data = { items, totalPrice, cartSize, addItems, isInCart, clear, removeItem };
    
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;