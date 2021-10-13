import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';



const CartItem = (prop) => {
    const cartData = useContext(CartContext);

    return (
        <div className="item-cart">
            <Card sx={{ maxWidth: 345 }}>
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
                <NavLink  to="/cart" exact activeClassName="selected">
                <Button onClick={() => cartData.removeItem(prop.item.id)} variant="contained" color="warning">Sacar del carrito</Button>
                </NavLink>
            </Card>
        </div>
    )
}

export default CartItem;