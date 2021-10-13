import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../Context/CartContext';
import CartItemList from '../CartItemList/CartItemList'
import { Grid, LinearProgress } from '@mui/material';

const CartItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const cartData = useContext(CartContext)

  useEffect(() => {
    setLoader(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(cartData.items);
      }, 500)
    })

    getItems.then((data) => {
      setItems(data);
    }).finally(() => setLoader(false))
  }, [])


  return (
    <div className="items-cart-container">
      <div>
        {loader ? (<h3>Cargando carrito...<LinearProgress color="error" /></h3>) : (
          <CartItemList items={items} />)
        }
      </div>
    </div>
  );
}

export default CartItemListContainer;
