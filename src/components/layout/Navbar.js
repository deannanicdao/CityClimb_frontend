import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
<<<<<<< HEAD
  } from 'react-router-dom'

// import { Button } from './Button.js'

import './Navbar.css'


const Navbar = () => {

  // Button logic
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Burger Menu logic
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Hides Buttons when window smaller than 960px
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
=======
  } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Example = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> df8943a1e9afae83f7b91916fafacfa315b3438a

  // Hides Login buttons from the menu bar
  // when burger menu is visible
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
<<<<<<< HEAD
    < >
      {/* Enitre navbar */}
      <nav className='navbar'>

        <div className='navbar-container'>
            {/* Logo */}
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src='/icon.png' alt='logo' width='50px' height='50px'></img>
            </Link>

            {/* Hamburger menu */}
            {/* Sets which icon is displaying on click */}
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
            {/* Sets the burger menu overlay on click */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

              {/* Individual Navigation Items */}
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                  Climbs
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                  Schedule
                </Link>
              </li>


              <li className='nav-item'>
                <Link to='/staff_login' className='nav-links' onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>

              {/* Visible when Staff or Admin Logged in */}
              <li className='nav-item'>
                <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                  Create
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/staff_logout' className='nav-links' onClick={closeMobileMenu}>
                  Logout
                </Link>
              </li>

              {/* Visible only when Admin Logged in */}
              <li className='nav-item'>
                <Link to='/staff_dashboard' className='nav-links' onClick={closeMobileMenu}>
                  Dashboard
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/staff_register' className='nav-links' onClick={closeMobileMenu}>
                  Register
                </Link>
              </li>


            </ul> 
              
        </div>
      </nav>

    </>
    
  )
}
export default Navbar;
=======
    <div >
      <Navbar color="light" light expand="lg" className="text-right" style={{justify_content: "flex-end"}}>
        <NavbarBrand href="/"><img src="./icon.png" alt="logo" width="50px" height="50px"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar >

            <NavItem>
              <NavLink> <Link to="/"> Home </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/climbs"> Climbs </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/schedule"> Schedule </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/help"> Help </Link> </NavLink>
            </NavItem>

            {/* Only visible when logged in as staff */}
            <NavItem>
              <NavLink> <Link to="/create_climb"> Create Climb </Link> </NavLink>
            </NavItem>

            {/* Only visible when no staff logged in */}
            <NavItem>
              <NavLink> <Link to="/staff_login"> Staff Login </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/staff_register"> Staff Register </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/staff_dashboard"> Staff Dashboard </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/climb_template"> Climb </Link> </NavLink>
            </NavItem>

            <NavItem>
              {/* <button onClick={() => {logout}}>Log out</button> */}
              <NavLink> <a onClick={logout} href="#!"> Logout </a> </NavLink>
            </NavItem>

            </Nav>
            </Collapse>
            
          </Navbar>
    </div>
  )
}


Example.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Example);
// TODO: Change EXAMPLE to something else
>>>>>>> df8943a1e9afae83f7b91916fafacfa315b3438a
