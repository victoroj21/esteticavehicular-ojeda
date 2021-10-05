import React from 'react';

import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (prop) => {

    const onAdd = (unidades) => {
        console.log(`Se agregaron ${unidades} unidades de ${prop.item.title} al carrito`)
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
                    <Grid xs={12}>
                        <img height="200px" width="auto" src={`../assets/${prop.item.pictureUrl}`} />
                    </Grid>
                    <Grid xs={12}>
                        <Typography gutterBottom variant="p" component="div">
                            {prop.item.description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs={6}>
                    <Grid xs={12} justifyContent="center">
                        <Typography gutterBottom variant="h5" component="div">
                            $ {prop.item.price}
                        </Typography>
                    </Grid>
                    <Grid xs={12}>
                        <CardActions>
                            <ItemCount stock={prop.item.stock} initial={0} onAdd={onAdd} />
                        </CardActions>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ItemDetail;