import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.initial);
    const [disabled, disabledButton] = useState(true);

    const agregar = () => {
        if (stock < props.stock) {
            setStock(stock + 1);
            disabledButton(false);
        }
    }

    const quitar = () => {
        if (stock > 1) {
            setStock(stock - 1);
        }
        else if (stock === 1) {
            setStock(stock - 1);
            disabledButton(true);
        }

    }

    return (
        <div className="item-count">
            <Grid container spacing={0.5} justifyContent="center">
                <Grid item xs={2}>{/* boton - */}
                    <IconButton onClick={quitar} color="primary" aria-label="resta stock" >
                        <DoNotDisturbOnTwoToneIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>{/* boton text */}
                    <TextField value={stock} size="small" label="Cantidad" variant="outlined" />
                </Grid>
                <Grid item xs={2}> {/* boton + */}
                    <IconButton onClick={agregar} color="primary" aria-label="suma stock" >
                        <ControlPointTwoToneIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Button disabled={disabled} onClick={() => props.onAdd(stock)} variant="contained">Agregar al carrito</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default ItemCount;