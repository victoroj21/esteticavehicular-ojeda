import React, { useState, useContext } from 'react';

import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Button, Paper } from '@mui/material';

import CartContext from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';

const ItemDetail = (prop) => {
    const [cantidad, setCantidad] = useState(0);
    const [disabled, setDisabledButton] = useState(true);

    const cartData = useContext(CartContext);

    const add = () => {
        if (cantidad < prop.item.stock) {
            setCantidad(cantidad + 1);
            setDisabledButton(false);
        }
    }

    const less = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
        else if (cantidad === 1) {
            setCantidad(cantidad - 1);
            setDisabledButton(true);
        }

    }

    const onAdd = (unidades) => {
        console.log(`Se agregaron ${unidades} unidades de ${prop.item.title} al carrito`)
        prop.item.quantity = unidades;
        cartData.addItems(prop.item);
    }


    return (
        <div className="item-detail">
            <Grid container spacing={0.5} justifyContent="center">
                <Grid xs={12}>
                    <Typography gutterBottom variant="h5" component="div">
                        {`# ${prop.item.id} - ${prop.item.title}`}
                    </Typography>
                </Grid>
                <Grid xs={6}>
                    <Paper variant="outlined">
                        <Grid xs={12}>
                            <img height="250px" width="auto" src={`../assets/${prop.item.pictureUrl}`} />
                        </Grid>
                    </Paper>
                    <Paper variant="outlined">
                        <Grid xs={12}>
                            <Typography gutterBottom variant="p" component="div">
                                {prop.item.description}
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid xs={6}>
                    <Paper variant="outlined">
                        <Grid xs={12} justifyContent="center">
                            <Typography gutterBottom variant="h5" component="div">
                                $ {prop.item.price}
                            </Typography>
                        </Grid>
                    </Paper>
                    <Paper variant="outlined">
                        <Grid xs={12}>
                            <CardActions>
                                <ItemCount stock={prop.item.stock} quantity={cantidad} add={add} less={less} />
                                {cartData.isInCart(prop.item.id) ?
                                    <NavLink to="/cart" exact>
                                        <Button color="success" variant="contained">Terminar mi compra</Button>
                                    </NavLink>
                                    :
                                    <Button disabled={disabled} onClick={() => onAdd(cantidad)} variant="contained">Agregar al carrito</Button>
                                }
                            </CardActions>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemDetail;