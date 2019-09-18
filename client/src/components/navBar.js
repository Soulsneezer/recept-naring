import React, { Component } from "react";
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo.png';
import AddRecipe from './AddRecipe';

import LogIn from './logIn.js';


class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Row className="logo">
            <Col xs={6} md={4}>
              <img src={Logo} height="60" width="60" alt="Nav-Logo" />
            </Col>
          </Row>
          <Navbar.Brand className='logoHeader' href="/">Recept & Näring</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/"></Nav.Link>
              <div className="navButtons">

                <AddRecipe />

                <LogIn />
              </div>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  };
};

export default NavBar;
