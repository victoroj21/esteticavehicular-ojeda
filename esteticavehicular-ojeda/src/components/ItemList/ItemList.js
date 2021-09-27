import React from 'react';
import Item from '../Item/Item';

import Grid from '@mui/material/Grid';

const ItemList = (prop) => {

    return (
        <div className="item-list">
            <Grid container spacing={0.5} justifyContent="left">
                {prop.items.map((item,index) => {
                    return (
                        <Grid key={index} item xs={4}>
                            <Item item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default ItemList;