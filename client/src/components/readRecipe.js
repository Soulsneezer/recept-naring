import React, { Component } from "react";
import PersonChoices from "./PersonChoices";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";

class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <PersonChoices />
      </React.Fragment>
    );
  }
}

export default ReadRecipe;
