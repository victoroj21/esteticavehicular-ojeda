import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Item = (prop) => {

    const onAdd = (unidades) => {
        console.log(`Se agregaron ${unidades} unidades de ${prop.item.title} al carrito`)
    }

    return (
        <div className="item">
            <Card sx={{ maxWidth: 345 }}>
                <Link to={`/item/${prop.item.id}`}>
                    <CardActionArea>
                        <img height="200px" width="auto" src={`../assets/${prop.item.pictureUrl}`} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {prop.item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                $ {prop.item.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActionArea>
                    <CardActions>
                        <ItemCount stock={prop.item.stock} initial={0} onAdd={onAdd} />
                    </CardActions>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Item;