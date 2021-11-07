import Grid from '@mui/material/Grid';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import CheckOut from '../components/CheckOut/CheckOut';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import NavBar from '../components/NavBar/NavBar';
import NotFound from '../components/NotFound/NotFound';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <NavBar />
            </Grid>
            <Grid item xs={12}>
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route exact path="/category/:id" component={ItemListContainer} />
                    <Route exact path="/item/:id" component={ItemDetailContainer} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/checkout" component={CheckOut} />
                    <Route exact path="*" component={NotFound}/>
                </Switch>
            </Grid>
        </Grid>
        </BrowserRouter >
    );
}