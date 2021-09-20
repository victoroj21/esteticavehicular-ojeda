import React from 'react';
import logo from './logo.svg';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import Grid from '@mui/material/Grid';

import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <ItemListContainer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
