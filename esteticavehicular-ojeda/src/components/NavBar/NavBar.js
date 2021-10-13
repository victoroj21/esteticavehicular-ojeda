import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'

import CartWidget from '../CartWidget/CartWidget'

import { AppBar, Toolbar, Button } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import EmailIcon from '@mui/icons-material/Email';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" color="primary" className="navbar">
      <Toolbar>
        <div className="logo-text">
          <div className='container-logo'>
            <NavLink to={"/"} >
              <img src={logo} alt='Estética vehicular' />
            </NavLink>
          </div><p>Estética Vehicular</p>
        </div>
        <div className="category-container" >
          <NavLink to="/" exact activeClassName="selected">
            <Button color="inherit" startIcon={<HomeIcon />}>
              Inicio
            </Button>
          </NavLink>
          <NavLink to="/" exact activeClassName="selected">
            <Button color="inherit" startIcon={<ListIcon />}>
              Productos
            </Button>
          </NavLink>
          <NavLink to="/faqs" exact activeClassName="selected">
            <Button color="inherit" startIcon={<LiveHelpIcon />}>
              FAQ's
            </Button>
          </NavLink>
          <NavLink to="/contact" exact activeClassName="selected">
            <Button color="inherit" startIcon={<EmailIcon />}>
              Contacto
            </Button>
          </NavLink>
          <CartWidget />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;