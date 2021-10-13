import React from 'react';
import CartItem from '../CartItem/CartItem';

import Grid from '@mui/material/Grid';

const CartItemList = (prop) => {

    return (
        <div className="item-list">
            <Grid container rowSpacing={2} columnSpacing={2} justifyContent="space-evenly" alignItems="center">
                {prop.items.map((item,index) => {
                    return (
                        <Grid key={index} item xs={3}>
                            <CartItem item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default CartItemList;