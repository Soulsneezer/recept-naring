/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import AddRecipeModal from './AddRecipeModal'

export default function AddRecipe() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Lägg till nytt recept
      </Button>

      <AddRecipeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}