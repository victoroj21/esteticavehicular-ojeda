import React from 'react';
import './NavBar.css';

import logo from '../../assets/logo.png'

import CartWidget from '../CartWidget/CartWidget'

import { AppBar, Toolbar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import EmailIcon from '@mui/icons-material/Email';


const NavBar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <div className="logo-text">
          <div className='container-logo'>
            <img src={logo} alt='Estética vehicular' />
          </div><p>Estética Vehicular</p>
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
          <CartWidget />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;