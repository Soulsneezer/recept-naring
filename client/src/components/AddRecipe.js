/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AddRecipeModal from './AddRecipeModal'
import { Component } from 'react';

 class AddRecipe extends Component {
  
  state = {
    modalShow: false
  }

  render(){

    return (
      <ButtonToolbar>
        <Button className="recipeButton" variant="outline-secondary" onClick={() => this.setState({modalShow:true})}>
        Skapa ett nytt recept
        </Button>
  
        <AddRecipeModal
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow:false})}
        />
      </ButtonToolbar>
    );
  }
}
export default AddRecipe;