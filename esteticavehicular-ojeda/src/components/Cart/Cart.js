import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import CartItemListContainer from '../CartItemListContainer/CartItemListContainer';
import './Cart.css';

const Cart = () => {
  
  const cartData = useContext(CartContext);

  return (
    <>
    <h4>Precio total de la compra: $ {cartData.totalPrice}</h4>
      <CartItemListContainer />
      </>
  );
}

export default Cart;