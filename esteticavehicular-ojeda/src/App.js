import React from 'react';

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
        <Grid item xs={12}>
          <ItemDetailContainer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
