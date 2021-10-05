import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';
import Button from '@mui/material/Button';

const ItemCount = (props) => {
    const [stock, setStock] = useState(props.initial);
    const [loading, setLoading] = useState(false)
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

    const load = () =>{
        setTimeout(() => {
            setLoading(true)
          }, 2000)

          setLoading(false);
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
                <p>Stock disponible {props.stock}</p>
            </Grid>
        </div>
    );
}

export default ItemCount;