/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddRecipeForm from './AddRecipeForm';


export default function AddRecipeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lägg till ett nytt recept här...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddRecipeForm />
      </Modal.Body>
      <Modal.Footer>
        <Button className="recipe-button" variant="outline-secondary" onClick={props.onHide}>Lägg till</Button>
      </Modal.Footer>
    </Modal>
  );
}