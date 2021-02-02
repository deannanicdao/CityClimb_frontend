import React, { useState } from 'react';
import { Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const Example = (props) => {
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
              <NavLink> <Link to="/search"> Search </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/schedule"> Schedule </Link> </NavLink>
            </NavItem>

            {/* Only visible when logged in as staff */}
            <NavItem>
              <NavLink> <Link to="/create_climb"> Create Climb </Link> </NavLink>
            </NavItem>

            {/* Only visible when no staff logged in */}
            <NavItem>
              <NavLink> <Link to="/login"> Staff Login </Link> </NavLink>
            </NavItem>

            <NavItem>
              <NavLink> <Link to="/help"> Help </Link> </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;