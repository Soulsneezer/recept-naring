import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCard from './foodCard.js'
import { Col, Row, Container } from 'react-bootstrap';
import REST from "../REST"

class Recipe extends REST{}
export default class FoodCardContainer extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.loadShows()
    this.recipesFound = []
    // this.handleClick = this.handleClick.bind(this);
  }
  async loadShows(){
    this.recipesFound = await Recipe.find(`.find()`);
    this.setState({ state: this.state });

    console.log(this.recipesFound)
  }
  render() {
    return (
      <React.Fragment>
      <Container className="container-outer">
        <div className="foodCardContainer">
          <Row>
            <Col sm={8} md={8} lg={8}>
              <div className="innerFoodCardContainer">
              {this.recipesFound.map( recipe => {
                return <FoodCard key={recipe._id} {...recipe}/>
              }
              )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      </React.Fragment>
    );
  }
}