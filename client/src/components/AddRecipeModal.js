/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import AddRecipeForm from './AddRecipeForm';


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
        <Row className="my-3">
          <Col xs={{ col: 3, offset: 8 }} sm={{ col: 3, offset: 8 }} md={{ col: 4, offset: 8 }} lg={{ col: 3, offset: 9 }}>
            <Button
              className="recipe-button align-right"
              variant="outline-success"
              aria-label="lägga till receptet till databasen"
              onClick={props.onHide}>Lägg till</Button>
          </Col>
        </Row>
      </Modal.Body>

    </Modal>
  );
}