import React from 'react';
import './CartWidget.css';

import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  return (
    <IconButton color="inherit" aria-label="carrito">
      <Badge badgeContent={4} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default CartWidget;