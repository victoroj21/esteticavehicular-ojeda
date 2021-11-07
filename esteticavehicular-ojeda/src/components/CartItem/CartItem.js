import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HighlightOff  } from '@mui/icons-material';


//Muestra los items que hay en el carrito
const CartItem = (prop) => {
    const cartData = useContext(CartContext);

    return (
        <div className="item-cart">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent>
                        <Grid container spacing={5} justifyContent="center" alignItems="flex-start">
                            <Grid item xs={3}>
                                <img height="100px" width="auto" src={`../assets/${prop.item.pictureUrl}`} />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="subtitle2" component="div">
                                    {prop.item.title}
                                </Typography>
                                <Typography variant="caption" component="div">
                                    {`$  ${prop.item.price} - (x${prop.item.quantity})`}
                                </Typography>
                                <Typography gutterBottom variant="overline" component="div">
                                    {`Subtotal $ ${prop.item.quantity * prop.item.price}`}
                                </Typography>
                                <NavLink to="/cart" exact>
                                    <IconButton onClick={() => cartData.removeItem(prop.item.id)} size="small" variant="contained" color="error"><HighlightOff /></IconButton>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    )
}

export default CartItem;
