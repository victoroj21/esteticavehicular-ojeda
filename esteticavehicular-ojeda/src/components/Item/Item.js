import React from 'react';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

//Muestra los items en el listado de productos
const Item = (prop) => {

    return (
        <div className="item">
            <Card sx={{ maxWidth: 345 }}>
                <Link to={`/item/${prop.item.id}`}>
                    <CardActionArea>
                        <CardContent>
                            {prop.item.stock == 0 ? 
                            <Typography variant="caption" color="red" component="div">
                                ¡Producto sin stock!
                            </Typography>
                            : <></>}
                            <img height="150px" width="auto" src={`../assets/${prop.item.pictureUrl}`} />
                            <Typography gutterBottom variant="h5" component="div">
                                $ {prop.item.price}
                            </Typography>
                            <Typography variant="overline" component="div">
                                {prop.item.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    )
}

export default Item;