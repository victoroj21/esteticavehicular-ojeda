import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = (prop) => {

    const onAdd = (unidades) => {
        console.log(`Se agregaron ${unidades} unidades de ${prop.item.title} al carrito`)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="auto"
                    image={`./assets/${prop.item.pictureUrl}`}
                    alt="producto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {prop.item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {prop.item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardActions>
                    <ItemCount stock={100} initial={0} onAdd={onAdd} />
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default Item;