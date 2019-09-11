import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCard from './foodCard.js'
import { Col, Row, Button } from 'react-bootstrap';

export default class FoodCardContainer extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div class="foodCardContainer">
        <Row>
        <Col sm={8} md={8} lg={8}>
            <div class="innerFoodCardContainer">
                <FoodCard/>
            </div>
        </Col>
        <Col sm={8} md={8} lg={8}>
            <div class="innerFoodCardContainer">
                <FoodCard/>
            </div>
        </Col>
        <Col sm={8} md={8} lg={8}>
            <div class="innerFoodCardContainer">
                <FoodCard/>
            </div>
        </Col>
        <Col sm={8} md={8} lg={8}>
            <div class="innerFoodCardContainer">
                <FoodCard/>
            </div>
        </Col>
        </Row>
        
        <Button  class="visaMerButton" onClick={this.handleClick}>Visa fler recept</Button>
        
        </div>
      </React.Fragment>
    );
  }
}