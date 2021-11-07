import React, { useContext, useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import CartContext from '../../Context/CartContext';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import db from '../../firebase/firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'

const CartItemList = (prop) => {
    const cartData = useContext(CartContext);

    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState(true)
    const [errorNameMsj, setErrorNameMsj] = useState("Ingrese su nombre");

    const [lastname, setLastname] = useState("");
    const [errorLastname, setErrorLastname] = useState(true)
    const [errorLastnameMsj, setErrorLastnameMsj] = useState("Ingrese su apellido");


    const [phone, setPhone] = useState("");
    const [errorPhone, setErrorPhone] = useState(true);
    const [errorPhoneMsj, setErrorPhoneMsj] = useState("Ingrese su numero de telefono");

    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [errorEmail, setErrorEmail] = useState(true);
    const [errorEmailMsj, setErrorEmailMsj] = useState("El mail no es válido o no coinciden");

    const finishCart = () => {
        const order = {
            buyer: {
                name: name + " " + lastname,
                email: email,
                phone: phone
            },
            items: prop.items,
            total: cartData.totalPrice
        }
        pushOrderFirebase(order);
    }

    async function pushOrderFirebase(order) {
        const orderFirebase = collection(db, "orders")
        const orderDoc = await addDoc(orderFirebase, order);
        cartData.setLastCartId(orderDoc.id)
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
        };
    }

    return (
        <div className="item-list">
            {
                cartData.cartSize > 0 ?
                    <>
                        <br />
                        <Grid container rowSpacing={2} columnSpacing={2} justifyContent="space-around" alignItems="stretch">
                            {prop.items.map((item, index) => {
                                return (
                                    <Grid key={index} item xs={3}>
                                        <CartItem item={item} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <br />
                        <br />
                        <p> Ingrese sus datos para terminar la compra:</p>
                        <br />
                        <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-around" alignItems="center">
                            <TextField
                                required
                                id="form-nombre"
                                label="Nombres"
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (name.length < 2) {
                                        setErrorName(true);
                                        setErrorNameMsj("Ingrese su nombre");
                                    }
                                    else {
                                        setErrorName(false)
                                        setErrorNameMsj("");
                                    }
                                }}
                                error={errorName}
                                helperText={errorNameMsj}

                            />
                            <TextField
                                required
                                id="form-apellido"
                                label="Apellidos"
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                    if (lastname.length < 2) {
                                        setErrorLastname(true);
                                        setErrorLastnameMsj("Ingrese su apellido");
                                    }
                                    else {
                                        setErrorLastname(false);
                                        setErrorLastnameMsj("");
                                    }
                                }}
                                error={errorLastname}
                                helperText={errorLastnameMsj}
                            />
                            <TextField
                                type="number"
                                required
                                id="form-telefono"
                                label="Telefono"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    if (phone.length < 2) {
                                        setErrorPhone(true);
                                        setErrorPhoneMsj("Ingrese su numero de telefono");
                                    }
                                    else {
                                        setErrorPhone(false);
                                        setErrorPhoneMsj("");
                                    }
                                }}
                                error={errorPhone}
                                helperText={errorPhoneMsj}
                            />
                            <TextField
                                required
                                id="form-mail"
                                label="Ingrese mail"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (email.length < 2) {
                                        setErrorEmail(true);
                                        setErrorEmailMsj("Ingrese email válido");
                                    }
                                    else {
                                        setErrorEmail(false);
                                        setErrorEmailMsj("");
                                    }
                                }}
                                error={errorEmail}
                                helperText={errorEmailMsj}
                            />
                            <TextField
                                required
                                id="form-mail-2"
                                label="Repita el mail"
                                onChange={(e) => {
                                    setEmail2(e.target.value);
                                    if (email2.length < 2) {
                                        setErrorEmail(true);
                                        setErrorEmailMsj("Ingrese email válido");
                                    }
                                    else {
                                        if (email != email2) {
                                            setErrorEmail(true);
                                            setErrorEmailMsj("Los emails no coinciden");
                                        }
                                        else {
                                            setErrorEmail(false);
                                            setErrorEmailMsj("");
                                        }
                                    }
                                }}
                                error={errorEmail}
                                helperText={errorEmailMsj}
                            />
                        </Grid>
                        <br />
                        <Grid container alignItems="center">

                            <Grid item xs={12}>
                                {(errorName || errorLastname || errorPhone || errorEmail) ? <></> :
                                    <NavLink to="/checkout" exact>
                                        <Button onClick={() => finishCart()} variant="contained">Finalizar compra</Button>
                                    </NavLink>
                                }
                            </Grid>

                        </Grid>

                    </>
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