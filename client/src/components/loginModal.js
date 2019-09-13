
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import LogInForm from './loginForm.js'; 


export default function loginModal (props) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Logga in här
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LogInForm />
        </Modal.Body>
        <Modal.Footer>
        <Button className="recipeButton" variant="outline-secondary" onClick={props.onHide}>Lägg till</Button>
        </Modal.Footer>
    </Modal>

  );
}

/*
 <AddRecipeForm /> */


/*

  <Modal
      {...props}
      size="xl"
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
        <Button className="recipeButton" variant="outline-secondary" onClick={props.onHide}>Lägg till</Button>
      </Modal.Footer>
    </Modal>

    */