import React from 'react';
import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget'

import {AppBar,Toolbar,Typography,Button  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import EmailIcon from '@mui/icons-material/Email';


const NavBar = () => {
  return (
    <AppBar position="static" className="main-navbar">
        <Toolbar>
          <div className="logo-text">            
            <CartWidget /><p>Estética Vehicular</p>
            </div>
          <div>
            <Button color="inherit" startIcon={<HomeIcon />}>
              Inicio
            </Button>
            <Button color="inherit" startIcon={<ListIcon />}>
              Productos
            </Button>
            <Button color="inherit" startIcon={<LiveHelpIcon />}>
              FAQ's
            </Button>
            <Button color="inherit" startIcon={<EmailIcon />}>
              Conctacto
            </Button>
          </div>
        </Toolbar>
    </AppBar>
  );
}

export default NavBar;