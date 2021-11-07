import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartSize, setCartSize] = useState(0);
    const [lastCartId, setLastCartId] = useState("");

    const addItems = (item) => { //agregar item al carrito
        if (!isInCart(item.id)) {
            setItems([...items, item]);
            setTotalPrice(totalPrice + (item.price * item.quantity));
            setCartSize(cartSize + item.quantity)
        }
        else {//Si el item ya existe en el carrito, modifico las cantidades y precio
            let itemAux = items.find(x => x.id == item.id) //busco el item antes de modifcarlo
            setTotalPrice(totalPrice - (itemAux.price * itemAux.quantity) + (item.price * item.quantity)); //actualizo el precio del carrito
            setCartSize(cartSize - itemAux.quantity + item.quantity)//actualizo el tamaño del carrito
            items.find(x => x.id == item.id).quantity = item.quantity; //modifico la cantidad
        }
    }

    const isInCart = (itemId) => { //item existe en carrito?
        return items.some(x => x.id === itemId)
    }

    const clear = () => { //vaciar el carrito
        setItems([]);
        setTotalPrice(0);
        setCartSize(0);
    }

    const removeItem = (itemId) => { //elimino item
        let itemAux = items.find(x => x.id == itemId)
        let aux = items.filter(x => x.id != itemId)
        setTotalPrice(totalPrice - (itemAux.price * itemAux.quantity));
        setCartSize(cartSize - itemAux.quantity)
        setItems(aux);
    }

    const sameQuantity = (itemId, itemQuantity) => { //evaluo si es la misma cantidad del item que está en el carrito
        if (isInCart(itemId)) {
            let quantityAux = items.find(x => x.id == itemId).quantity
            if (quantityAux == itemQuantity)
                return true;
        }
        return false;
    }

    const data = { items, totalPrice, cartSize, lastCartId, addItems, isInCart, clear, removeItem, sameQuantity, setLastCartId };

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;