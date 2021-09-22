import React from 'react';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import Grid from '@mui/material/Grid';

import './App.css';

const producto = {nombre:"Nombre del producto", precio:15625, stock:10}

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <ItemListContainer nombre={producto.nombre} precio={producto.precio} stock={producto.stock}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
