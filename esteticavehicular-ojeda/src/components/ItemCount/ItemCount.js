import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.initial);

    const onAdd = () => {
        if (stock < props.stock)
            setStock(stock + 1);
    }

    const onSubtract = () => {
        if (stock > 0)
            setStock(stock - 1);

    }

    return (
        <Grid container spacing={0.5} justifyContent="center">
            <Grid item xs={1}>{/* boton - */}
                <IconButton onClick={onSubtract} color="primary" aria-label="resta stock" >
                    <DoNotDisturbOnTwoToneIcon />
                </IconButton>
            </Grid>
            <Grid item xs={2}>{/* boton text */}
                <TextField value={stock} size="small" label="Cantidad" variant="outlined" />
            </Grid>
            <Grid item xs={1}> {/* boton + */}
                <IconButton onClick={onAdd} color="primary" aria-label="suma stock" >
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