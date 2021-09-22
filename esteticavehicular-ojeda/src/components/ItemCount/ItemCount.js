import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';

const ItemCount = (stock) => {
    const [cantidad, setCantidad] = useState(stock.initial);

    const sumarCantidad = () => {
        if (cantidad < stock.disponible)
            setCantidad(cantidad + 1);
        //console.log(cantidad);
    }

    const restarCantidad = () => {
        if (cantidad > 0)
            setCantidad(cantidad - 1);
        //console.log(cantidad);

    }

    return (
        <Grid container spacing={0.5} justifyContent="center">
            <Grid item xs={1}>{/* boton - */}
                <IconButton onClick={restarCantidad} color="primary" aria-label="resta stock" >
                    <DoNotDisturbOnTwoToneIcon />
                </IconButton>
            </Grid>
            <Grid item xs={2}>{/* boton text */}
                <TextField value={cantidad} size="small" label="Cantidad" variant="outlined" />
            </Grid>
            <Grid item xs={1}> {/* boton + */}
                <IconButton onClick={sumarCantidad} color="primary" aria-label="suma stock" >
                    <ControlPointTwoToneIcon />
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Agregar al carrito</Button>
            </Grid>
        </Grid>
    );
}

export default ItemCount;