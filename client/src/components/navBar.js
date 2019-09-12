import React, { Component } from "react";
import { Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo.png';
import LogInUser from '../images/user.png';
import AddRecipe from './AddRecipe';


class NavBar extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Row className="logo">
            <Col xs={6} md={4}>
              <img src={Logo} height="55" width="55" alt="Nav-Logo" />
            </Col>
          </Row>
          <Navbar.Brand className='logoHeader' href="/">Recept & Näring</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/"></Nav.Link>
              <div className="navButtons">

                <AddRecipe />
      
                <Button className="logInButton" variant="outline-secondary" href="/logIn"> <img className="personLogo" src={LogInUser} height="30" width="30" alt="Nav-Logo" /> Logga in</Button>
              </div>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  };
};

export default NavBar;
