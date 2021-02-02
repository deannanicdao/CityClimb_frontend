import React, { useState } from 'react';
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
    <div>
      <Navbar color="light" light expand="md" fixed="right" className="text-right">
        <NavbarBrand href="/"><img src="./icon.png" alt="logo" width="50px" height="50px"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./">Search Climbs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Setting Schedule</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Staff Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Help</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;