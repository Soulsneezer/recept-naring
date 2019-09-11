import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCard from './foodCard.js'
import { Col, Row } from 'react-bootstrap';


export default class FoodCardContainer extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {};
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
        </div>
      </React.Fragment>
    );
  }
}