import React from 'react';
import './NavBar.css';
import { categorias } from '../../data/categorias';
import logo from '../../assets/logo.png'

import CartWidget from '../CartWidget/CartWidget'

import { AppBar, Toolbar, Button } from '@mui/material';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <div className="logo-text">
          <div className='container-logo'>
            <NavLink to={"/"}>
              <img src={logo} alt='Estética vehicular' />
            </NavLink>
          </div><p>Estética Vehicular</p>
        </div>
        <div className="category-container" >
          <ul>
          {
            categorias.map((item) => {
              return (
                <NavLink to={item.path} exact activeClassName="selected">
                  <li class="unselected">
                    {item.description}
                  </li>
                </NavLink>
              )
            })
          }
          </ul>
          <CartWidget />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;