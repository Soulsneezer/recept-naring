import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../images/logo.png';




const NavBar = () => {

  const navLogo = (
    <span className="logo">
      <a href="/">
        <img src={Logo} height="30" width="30" alt="Nav-Logo" /></a>
    </span>
  );

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        {navLogo}
        <Navbar.Brand href="/">Recept & Näring</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"></Nav.Link>
          </Nav>
          <Button variant="outline-secondary">Lägg Nytt Recept</Button>
            <Button variant="outline-secondary">Logga in</Button>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
