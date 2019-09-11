import React, { Component } from 'react';
import { Form, FormControll } from 'react-bootstrap';


class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props)
  }
    render() {
      return(
        <div>
        <div>ladda bild här</div>
         <Form.Control className="form-control" display="inline" type="text" placeholder="Normal text" />
         <Form.Control className="form-control" display="inline" type="text" placeholder="Normal text" />
        <h1>shit</h1>
         <h2>hellooooooo!</h2>
         </div>

      )}
  }

  export default AddRecipeForm; 