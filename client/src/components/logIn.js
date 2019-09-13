
import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import LoginModal from './loginModal.js' 


 class logIn extends React.Component {
  
  state = {
    modalShow: false
  }

  render(){

    return (
      <ButtonToolbar>
        <Button className="recipeButton" variant="outline-secondary" onClick={() => this.setState({modalShow:true})}>
        Logga in
        </Button>
  
       <LoginModal
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow:false})}
      /> 
      </ButtonToolbar>
    );
  }
}
export default logIn;