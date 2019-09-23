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
      color="green"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Lägg till ett nytt recept här...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <AddRecipeForm />
        <Row className="my-3">
          <Col xs={{ col: 3, offset: 8 }} md={{ col: 3, offset: 9 }} lg={{ col: 3, offset: 9 }}>
            <Button className="recipe-button" variant="outline-success" onClick={props.onHide}>Lägg till</Button>
          </Col>
        </Row>
      </Modal.Body>

    </Modal>
  );
}