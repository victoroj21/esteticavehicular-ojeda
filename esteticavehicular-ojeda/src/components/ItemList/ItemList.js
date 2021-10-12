import React from 'react';
import Item from '../Item/Item';

import Grid from '@mui/material/Grid';

const ItemList = (prop) => {

    return (
        <div className="item-list">
            <Grid container direction="column" rowSpacing={2} columnSpacing={2} justifyContent="space-evenly" alignItems="center">
                {prop.items.map((item,index) => {
                    return (
                        <Grid key={index} item xs={12}>
                            <Item item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default ItemList;