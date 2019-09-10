import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap';
import Logo from '../images/logo.png';
import LogInUser from '../images/user.png';




const NavBar = () => {

  const navLogo = (
    <span className="logo">
      <a href="/">
        <img src={Logo} height="40" width="40" alt="Nav-Logo" /></a>
    </span>
  );

  const logoInUser = (
    <span className="userInButton">
      <a href="/logIn">
        <img src={LogInUser} height="20" width="20" alt="Person logo in button" /></a>
    </span>
  );

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        {navLogo}
        <Navbar.Brand className='logoHeader' href="/">Recept & Näring</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"></Nav.Link>
            <div className="navButton">
              <Button variant="outline-secondary" href="/recipe">Lägg Nytt Recept</Button>
              <Button variant="outline-secondary" href="/logIn">{logoInUser}Logga in</Button>
            </div>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
