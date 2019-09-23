
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
        <Modal.Header closeButton className="modal-headish">
        <Modal.Title id="contained-modal-title-vcenter" className="modal-titlish">
            Logga in här 
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <LogInForm />
        </Modal.Body>
    </Modal>

  );
}




