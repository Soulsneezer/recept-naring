import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import LoginModal from './loginModal.js'
import LogInUser from '../images/user.png'

class logIn extends React.Component {
  state = {
    modalShow: false
  }

  render() {
    return (
      <ButtonToolbar>
        <Button 
          className="logInButton" 
          variant="outline-secondary" 
          onClick={() => this.setState({ modalShow: true })}
          aria-label="logga in"
        > 
          <img className="personLogo" src={LogInUser} height="30" width="30" alt="person ikon" />
          Logga in
        </Button>
        <LoginModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </ButtonToolbar>
    );
  }
}
export default logIn;