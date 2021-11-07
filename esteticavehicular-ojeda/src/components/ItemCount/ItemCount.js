import React from 'react';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ControlPointTwoToneIcon from '@mui/icons-material/ControlPointTwoTone';
import DoNotDisturbOnTwoToneIcon from '@mui/icons-material/DoNotDisturbOnTwoTone';
import { Typography } from '@mui/material';

//Maneja cantidad de un producto
const ItemCount = (props) => {

    return (
        <div className="item-count">
            <Grid container spacing={0.5} justifyContent="center">
                <Grid item xs={2}>{/* boton - */}
                    <IconButton onClick={props.less} color="error" aria-label="resta stock" >
                        <DoNotDisturbOnTwoToneIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={3}>{/* boton text */}
                     <TextField value={props.quantity} size="small" label="Cantidad" variant="outlined" />
                </Grid>
                <Grid item xs={2}> {/* boton + */}
                    <IconButton onClick={props.add} color="error" aria-label="suma stock" >
                        <ControlPointTwoToneIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="overline" component="div">
                    Stock disponible {props.stock}
                    </Typography>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default ItemCount;