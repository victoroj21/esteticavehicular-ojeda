import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { Grid } from '@mui/material';

const ItemsCartContainer = () => {
  const [items, setItems] = useState([]);
  const cartData = useContext(CartContext)
  useEffect(() => {

    const getItems = new Promise((resolve) => {
        resolve(cartData.items);
    })

    getItems.then((data) => {
      setItems(data);
    })
  }, [items])


  return (
    <div className="item-cart-container">
      <Grid container direction="column" rowSpacing={2} columnSpacing={2} justifyContent="space-evenly" alignItems="center">
        <h2>Tus productos en el carrito:</h2>
        {
          items.map((item, index) => {
            return (
              <Grid key={index} item xs={12}>
                <ItemCart item={item} />
              </Grid>
            )
          })
        }

      </Grid>
    </div>
  );
}

export default ItemsCartContainer;