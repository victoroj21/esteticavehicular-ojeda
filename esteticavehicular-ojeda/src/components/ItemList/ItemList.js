import React from 'react';
import Item from '../Item/Item';

import Grid from '@mui/material/Grid';

const ItemList = (prop) => {

    return (
        <div className="item-list">
            <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
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