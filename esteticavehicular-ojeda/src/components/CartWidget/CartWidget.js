import React from 'react';
import logo from '../../assets/logo.png'
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='container-logo'>
        <img src={logo} alt='Estética vehicular'/>
    </div>
  );
}

export default CartWidget;