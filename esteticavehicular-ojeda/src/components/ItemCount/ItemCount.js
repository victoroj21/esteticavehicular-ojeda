import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';

const ItemCount = (props) => {

    return (
        <div className="item-count">
            <Grid container spacing={0.5} justifyContent="center">
                <Grid item xs={2}>{/* boton - */}
                    <IconButton onClick={props.less} color="primary" aria-label="resta stock" >
                        <DoNotDisturbOnTwoToneIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>{/* boton text */}
                     <TextField value={props.quantity} size="small" label="Cantidad" variant="outlined" />
                </Grid>
                <Grid item xs={2}> {/* boton + */}
                    <IconButton onClick={props.add} color="primary" aria-label="suma stock" >
                        <ControlPointTwoToneIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <p>Stock disponible {props.stock}</p>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default ItemCount;