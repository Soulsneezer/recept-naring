/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Alert, Button, Modal, Row, Col } from 'react-bootstrap';
import AddRecipeForm from './AddRecipeForm';

function AlertPopUp() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading xs={12} sm={12} md={12} lg={12}>Det blev visst lite fel här!</Alert.Heading>
        <p>
          Du kan inte lägga till några recept just nu då vår databas befinner sig under utveckling...
          Klicka på krysset i högra top hörnan för att stänga denna modal!
        </p>
      </Alert>
    );
  }
  return <Button
    className="add-button-alert"
    variant="outline-success"
    aria-label="lägga till receptet till databasen"
    onClick={() => setShow(true)}>Lägg till</Button>;
}


export default function AddRecipeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      aria-label="en modal för att lägga till ett recept "
    >
      <Modal.Header closeButton aria-label="stäng modalen">
        <Modal.Title id="contained-modal-title-vcenter" aria-label="modaltitel: lägg till ett nytt recept här..." >
          Lägg till ett nytt recept här...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddRecipeForm />
      </Modal.Body>
      <Modal.Footer>
        <AlertPopUp />
      </Modal.Footer>
    </Modal>
  );
}