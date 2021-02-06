import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

import { Button } from './Button'


const Example = (props) => {

  // Button logic
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  // Burger Menu logic
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // Hides Buttons when window smaller than 960px
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    < >
      {/* Enitre navbar */}
      <nav className="navbar">
        <div className="navbar-container">

            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <img src="./icon.png" alt="logo" width="50px" height="50px"></img>
            </Link>

            {/* Hamburger menu */}
            {/* Sets which icon is displaying on click */}
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            
            {/* Sets the burger menu overlay on click */}
            <ul className={ click ? "nav-menu active" : "nav-menu" } > 

              {/* Individual Navigation Items */}
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
                  Search
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/schedule" className="nav-links" onClick={closeMobileMenu}>
                  Schedule
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/help" className="nav-links" onClick={closeMobileMenu}>
                  Help
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/create_climb" className="nav-links" onClick={closeMobileMenu}>
                  Create Climb
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/staff_login" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Staff Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/staff_register" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Staff Register
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/staff_dashboard" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Staff Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/climb_template" className="nav-links" onClick={closeMobileMenu}>
                  Climb Template
                </Link>
              </li>

            </ul> 

            {button && <Button buttonStle='btn--outline'>Sign Up</Button>}

        </div>
      </nav>

    </>

      /* <Navbar color="light" light expand="lg" className="text-right" style={{justify_content: "flex-end"}}>
        <NavbarBrand href="/"><img src="./icon.png" alt="logo" width="50px" height="50px"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav navbar >

            <NavItem>
              <NavLink> <Link to="/climb_template"> Climb </Link> </NavLink>
            </NavItem>

            </Nav>
            </Collapse>
          </Navbar> */
    
  )
}
export default Example;