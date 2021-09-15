import './NavBar.css';
import logo from '../../assets/logo.png'
//material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import EmailIcon from '@material-ui/icons/Email';

const NavBar = () => {

  return (
    <AppBar position="static" className="main-navbar">
        <Toolbar>
          <Typography variant="h6">
              <div className='container-logo'>
                  <img src={logo} alt='Estética vehicular'/>
            </div>
          </Typography>
          <div>
            <Button color="inherit" startIcon={<HomeIcon />}>Inicio</Button>
            <Button color="inherit" startIcon={<ListIcon />}>Productos</Button>
            <Button color="inherit" startIcon={<ContactSupportIcon />}>FAQS</Button>
            <Button color="inherit" startIcon={<EmailIcon />}>Contactanos</Button>
          </div>
        </Toolbar>
    </AppBar>
  );
}

export default NavBar;