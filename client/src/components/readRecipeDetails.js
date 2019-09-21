import React, { Component } from "react";
import {
  ReactFragment,
  Row,
  Col,
  Card,
  ListGroupItem,
  ListGroup
} from "react-bootstrap";
import REST from "../REST";
import ReadRecipeNutrition from "./readRecipeNutrition";
import PersonChoices from "./PersonChoices";
class Recipe extends REST {}

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);

    let fatDetails = () => {
      return {
        monounsaturated: 10,
        polyunsaturated: 15,
        unsaturated: 5
      };
    };

    this.state = {
      nutritions: {
        Kcal: 455,
        Protein: 30,
        Fat: fatDetails,
        Carbs: 40,
        Salt: 3
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        <Row className='m-0'>
          <Col className='col-md-4 col-sm-12'>
            <img
              className='card-img read-recipe-img'
              src={require("../images/" + this.props.img)}
              alt={"En bild på " + this.props.name}
            />
          </Col>

          <Col className='col-md-8'>
            <Row className='m-0'>
              <Col className='col-md-2 col-xs-12 offset-10'>
                <PersonChoices {...this.recipe} />
              </Col>
              <Col className='col-md-10'>
                {/* here I need to render all the details of the recipe */}
                <Row className='m-0'>
                  <h1>{this.props.name}</h1>
                </Row>
                <Row className='m-0 font-styling'>
                  <p>{this.props.startText}</p>
                </Row>
                <Row className='mt-4'>
                  <h3>Tag: {this.props.category}</h3>
                </Row>
                <Row className='mt-4'>
                  <h3> Tid: {this.props.time} min</h3>
                </Row>
                <Row>
                  <h3 className='mt-5'>Näring per portion </h3>
                </Row>
                <Row>
                  {Object.keys(this.state.nutritions).map(key => (
                    <ReadRecipeNutrition
                      key={key}
                      nutrientName={key}
                      nutrientValue={this.state.nutritions[key]}
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipeDetails;
