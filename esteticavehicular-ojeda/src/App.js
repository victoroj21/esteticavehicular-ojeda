import React from 'react';
import AppRouter from './AppRouter/AppRouter';

import './App.css';

import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  );
}

export default App;
