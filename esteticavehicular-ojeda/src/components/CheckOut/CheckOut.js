import { LinearProgress, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartContext from '../../Context/CartContext';

//Para finalizar la compra y mostrar el id de la compra
const CheckOut = () => {
    const [loader, setLoader] = useState(true);
    const cartData = useContext(CartContext);

    useEffect(() => {
        setLoader(true)
        const getItems = new Promise((resolve) => {
                resolve(cartData.lastCartId)
        })

        getItems.then((data) => {
            if(data!="" || cartData.cartSize == 0)
                setLoader(false) 

        })

    }, [cartData.lastCartId])

    return (
        <>
            {loader ? (<h3>Finalizando compra...<LinearProgress color="error" /></h3>) : (
                <div>
                    <Typography variant="h5" component="div">
                        {"Su compra se ha finalizado con éxito. ¡Gracias por comprar!"}
                    </Typography>
                    <Typography variant="overline" component="div">
                        {"El código de su compra es: #" + cartData.lastCartId}
                    </Typography>
                    <NavLink to="/">
                        <p>Volver al inicio</p>
                    </NavLink>
                </div>
            )}
        </>
    );
}

export default CheckOut;