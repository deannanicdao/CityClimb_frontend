import React, { useState, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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

  const toggle = () => setIsOpen(!isOpen);

  return (
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