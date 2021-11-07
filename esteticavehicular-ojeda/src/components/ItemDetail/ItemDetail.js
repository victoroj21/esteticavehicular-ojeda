import React, { useState, useContext } from 'react';
import tarjetas from '../../assets/tarjetas.png'
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Button, Paper } from '@mui/material';

import CartContext from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';

//Detalle de productos
const ItemDetail = (prop) => {

    const [cantidad, setCantidad] = useState(prop.item.quantity);
    const [disabled, setDisabledButton] = useState(true);

    const cartData = useContext(CartContext);

    const add = () => { //suma cantidad
        if (cantidad < prop.item.stock) {
            setCantidad(cantidad + 1);
            setDisabledButton(false);
        }
    }

    const less = () => { //resta cantidad
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
        else if (cantidad === 1) {
            setCantidad(cantidad - 1);
            setDisabledButton(true);
        }

    }

    const onAdd = (unidades) => { //agrega al carrito
        prop.item.quantity = unidades;
        cartData.addItems(prop.item);
    }


    return (
        <>
            {prop.item.id == null ?
                <>
                    <Typography variant="h5" component="div">
                        {"Ups!, el producto no existe"}
                    </Typography>
                    <NavLink to="/">
                        <p>Volver al inicio</p>
                    </NavLink>
                </>
                :
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <Typography gutterBottom variant="h4" component="div">
                                {`${prop.item.title}`}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper elevation={0}>
                            <img height="250px" width="auto" src={`../assets/${prop.item.pictureUrl}`} />
                            <Typography gutterBottom variant="p" component="div">
                                {prop.item.description}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper variant="outlined">
                            <Typography variant="subtitle2" gutterBottom component="div">
                                <br />
                            </Typography>
                            <Typography gutterBottom variant="h4" component="div">
                                $ {prop.item.price}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom component="div" color="primary">
                                ¡12 cuotas sin interes!
                            </Typography>
                            <img src={tarjetas} height="60px" width="auto" />
                            <Typography variant="subtitle2" gutterBottom component="div">
                                <br />
                            </Typography>
                            <ItemCount stock={prop.item.stock} quantity={cantidad} add={add} less={less} />
                            <Typography variant="subtitle2" gutterBottom component="div">
                                <br />
                            </Typography>
                            {cartData.sameQuantity(prop.item.id, cantidad) ?
                                <NavLink to="/cart" exact>
                                    <Button color="primary" variant="contained">Terminar mi compra</Button>
                                </NavLink>
                                :
                                // agrego este navlink para evitar error de refrescar el carrito si se queda en la misma ventana
                                <NavLink to={"/item/" + prop.item.id} exact>
                                    <Button disabled={disabled} onClick={() => onAdd(cantidad)} color="error" variant="contained">Agregar al carrito</Button>
                                </NavLink>
                            }
                            <Typography variant="subtitle2" gutterBottom component="div">
                                <br />
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default ItemDetail;