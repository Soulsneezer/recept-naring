
import React from 'react';
import { Modal } from 'react-bootstrap';
import LogInForm from './loginForm.js'; 


export default function loginModal (props) {
  return (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-titlish">
            Logga in här 
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LogInForm />
        </Modal.Body>
        {/*<Modal.Footer>
        <Button className="recipeButton center-block" variant="outline-secondary" onClick={props.onHide}>Lägg till</Button>
        </Modal.Footer>*/}
    </Modal>

  );
}




