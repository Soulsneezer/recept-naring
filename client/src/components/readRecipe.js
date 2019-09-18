import React, { Component } from "react";
import PersonChoices from "./PersonChoices";
import ReadRecipeImages from "./readRecipeImages";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeNutrition from "./readRecipeNutrition";
import { Container, Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import REST from "../REST";
class Recipe extends REST{};
class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.loadFromUrl()
    this.recipe = ""
    this.state = {}
  }
  async loadFromUrl(){
    let data = await Recipe.find(
      `.find({_id:'${this.props.match.params.id}'})`
    ); 
    this.recipe = data.pop();  
    this.setState({state: this.state})
  }

  render() {
    return (
      <React.Fragment>
        <Row className='m-3'>
          <Col className='col-md-4'>
             <ReadRecipeImages  img={this.recipe.img} />          
          </Col>
          <Col className='col-md-5 auto'>
          {this.recipe ? <ReadRecipeDetails {...this.recipe}/> : null}
          </Col>
          <Col className='col-md-3 xs lg-2'>
            <PersonChoices {...this.recipe} />
          </Col>
        </Row>
        <Row className='m-3'>
          <Col className='offset-2'>Näring per portion</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipe;
