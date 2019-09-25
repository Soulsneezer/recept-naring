/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AddRecipeModal from './AddRecipeModal'


class AddRecipe extends Component {

  state = {
    modalShow: false
  }

  render() {

    return (
      <ButtonToolbar>
        <Button className="recipeButton" aria-label="öppna modal" variant="outline-secondary" onClick={() => this.setState({ modalShow: true })}>
          Skapa ett nytt recept
        </Button>

        <AddRecipeModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </ButtonToolbar>
    );
  }
}
export default AddRecipe;