import React, { useContext } from 'react';
import './CartWidget.css';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import CartContext from '../../Context/CartContext';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  const cartData = useContext(CartContext);
  return (
    <>
      {cartData.cartSize > 0 ?
        <NavLink to="/cart" exact activeClassName="selected">
          <IconButton color="inherit" aria-label="carrito">
            <Badge badgeContent={cartData.cartSize} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </NavLink>
        :
        <></>
      }
    </>
  );
}

export default CartWidget;