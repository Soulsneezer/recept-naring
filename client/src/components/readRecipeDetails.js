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
class Recipe extends REST {}

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.kcal = 0;
    this.monoSaturatedFats = 0;
    this.monoUnSaturatedFats = 0;
    this.saturatedFats= 0;
    this.prots = 0;
    this.carbs = 0;
    this.klar = false

    let fatDetails = () => {
      return {
        monounsaturated: this.monoUnSaturatedFats,
        polyunsaturated: this.saturatedFats,
        unsaturated: this.saturatedFats
      };
    };

    this.state = {
      nutritions: {
        Kcal: this.kcal,
        Protein: this.prots,
        Fat: fatDetails,
        Carbs: this.carbs,
        Salt: 3
      }
    };

  }
  componentDidMount(){
    this.hej()
  }
      hej(){
        let kcal = 0;
        let monoSaturatedFats = 0;
        let monoUnSaturatedFats = 0;
        let saturatedFats = 0;
        let prots = 0;
        let carbs = 0;
        for(let i in this.props.ingredient){
          kcal += this.props.ingredient[i].nutrient.kcal
          monoUnSaturatedFats += this.props.ingredient[i].nutrient.monoUnSaturatedFats
          monoSaturatedFats += this.props.ingredient[i].nutrient.monoSaturatedFats
          saturatedFats += this.props.ingredient[i].nutrient.saturatedFats
          prots += this.props.ingredient[i].nutrient.prots
          carbs += this.props.ingredient[i].nutrient.carbs
        }
        kcal = kcal / this.props.portion
        monoUnSaturatedFats = monoUnSaturatedFats / this.props.portion
        monoSaturatedFats = monoSaturatedFats / this.props.portion
        saturatedFats = saturatedFats / this.props.portion
        prots = prots / this.props.portion
        carbs = carbs / this.props.portion

        this.kcal = kcal
        this.monoUnSaturatedFats = monoUnSaturatedFats
        this.monoSaturatedFats = monoSaturatedFats
        this.saturatedFats = saturatedFats
        this.prots = prots
        this.carbs = carbs
        this.setState({state: this.state})
        this.klar = true
        console.log(this.carbs)
      }

  render() {
    return (
      <React.Fragment>
        <Row className='mt-2'>
          <h1>{this.props.name}</h1>
        </Row>
        <Row className='mt-2 font-styling'>
          <p>{this.props.startText}</p>
        </Row>
        <Row className='mt-4'>
          <h3>Tag:  {this.props.category.join(", ")}</h3>
        </Row>
        <Row className='mt-4'>
          <h3> Tid: {this.props.time} min</h3>
        </Row>
        <Row>
          <h3 className='mt-5'>Näring per portion </h3>
        <Row> 
        </Row>
        {this.klar ?
        <span>
        {Object.keys(this.state.nutritions).map(key => (
            <ReadRecipeNutrition
              key={key}
              nutrientName={key}
              nutrientValue={this.state.nutritions[key]}
            />
          ))}
          </span>
          : null}
        </Row>
      </React.Fragment>
    );
  }
}

export default ReadRecipeDetails;
