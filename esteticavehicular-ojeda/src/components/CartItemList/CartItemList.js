import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../Context/CartContext';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

import db from '../../firebase/firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'

const CartItemList = (prop) => {
    const cartData = useContext(CartContext);

    const finishCart = () => {
        const order = {
            buyer: {
                name: "Victor",
                email: "victor@mail.com",
                phone: 3420303456

            },
            items: prop.items,
            total: cartData.totalPrice
        }
        pushOrderFirebase(order);
        console.log("Compra finalizada", order);
    }

    async function pushOrderFirebase(order) {
        const orderFirebase = collection(db, "orders")
        const orderDoc = await addDoc(orderFirebase, order);
        console.log("El id de la orden es:", orderDoc.id)
        updateItemsStock(order.items)
        cartData.clear();

    }

    async function updateItemsStock(items) {
        for (let item of items) {
            const itemDoc = doc(db, "items", item.id);

            await updateDoc(itemDoc,
                {
                    stock: item.stock - item.quantity
                })
            console.log("se modifico el item", itemDoc)
        };
    }

    return (
        <div className="item-list">
            {cartData.cartSize > 0 ?
                <Grid container rowSpacing={2} columnSpacing={2} justifyContent="space-evenly" alignItems="center">
                    {prop.items.map((item, index) => {
                        return (
                            <Grid key={index} item xs={3}>
                                <CartItem item={item} />
                            </Grid>
                        )
                    })}
                    <Grid container alignItems="center">
                        <Button onClick={() => finishCart()} variant="contained">Terminar mi compra</Button>
                    </Grid>
                </Grid>
                :
                <>
                    <h2>{"Carrito vacio"}</h2>
                    <NavLink to="/">
                        <p>Empezar mi compra</p>
                    </NavLink>
                </>
            }
        </div>
    );
}

export default CartItemList;