import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';




const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar className="navBarBackground" bg="light" variant="light">
        <Navbar.Brand href="/">Recept & Näring</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Start</Nav.Link>
          <Nav.Link href="/about">Om oss</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Sök</Button>
        </Form>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
