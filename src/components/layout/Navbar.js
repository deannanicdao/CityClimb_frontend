import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom'
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

const NavbarComponent = ({ auth: { isAuthenticated, isAdmin }, logout }) => {
  const adminLinks = (
    <Navbar>

      <NavItem>
        <NavLink> 
          <Link to="/staff_register"> Staff Register </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/climbs"> Climbs </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/schedule"> Schedule </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/staff_dashboard"> Staff Dashboard </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <a onClick={logout} href="#!"> Logout </a>
        </NavLink>
      </NavItem>

    </Navbar>
  )
  
  const authLinks = (
    <Navbar>
      <NavItem> 
        <NavLink> 
          <Link to="/create_climb"> Create Climb </Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/climbs"> Climbs </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/schedule"> Schedule </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <a onClick={logout} href="#!"> Logout </a>
        </NavLink>
      </NavItem>

    </Navbar>
  )

  const guestLinks = (
    <Navbar>
      <NavItem> 
        <NavLink> 
          <Link to="/"> Home </Link>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/staff_login"> Staff Login </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/climbs"> Climbs </Link> 
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink> 
          <Link to="/schedule"> Schedule </Link> 
        </NavLink>
      </NavItem>

    </Navbar>
  )

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="lg" className="text-right" style={{justify_content: "flex-end"}}>
      <NavbarBrand href="/"><img src="./icon.png" alt="logo" width="50px" height="50px"></img></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar >
        <Nav navbar >
          <Fragment> 
            {isAdmin ? 
              adminLinks : isAuthenticated ? 
              authLinks : guestLinks } 
          </Fragment>
        </Nav>
      </Collapse>
    </Navbar>
 
  );
}


NavbarComponent.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavbarComponent);