import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCard from './foodCard.js'
import { Col, Row } from 'react-bootstrap';
import HomePageRecipeHeadline from './homePageRecipeHeadline';

export default class FoodCardContainer extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }

    // console.log(this.recipesFound)
  
  render() {
    return (
      <React.Fragment>
        <div className="foodCardContainer">
          <Row>
            <Col sm={8} md={8} lg={8}>
              <div className="innerFoodCardContainer">
                <HomePageRecipeHeadline />
                <FoodCard />
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}