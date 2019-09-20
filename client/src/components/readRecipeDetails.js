import React, { Component } from "react";
import {
  Row
} from "react-bootstrap";
import REST from "../REST";
import ReadRecipeNutrition from "./readRecipeNutrition";
class Recipe extends REST {}

class ReadRecipeDetails extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.nutes= {
      Kcal: 0,
      "Enkelmättat fett": 0,
      "Enkelomättat fett": 0,
      "Mättat fett": 0,
      Protein: 0,
      Kolhydrater: 0
    }

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
        this.nutes.Kcal = Math.round(kcal / this.props.portion)
        this.nutes["Enkelomättat fett"] = Math.round(monoUnSaturatedFats / this.props.portion)
        this.nutes["Enkelmättat fett"] = Math.round(monoSaturatedFats / this.props.portion)
        this.nutes["Mättat fett"] = Math.round(saturatedFats / this.props.portion)
        this.nutes.Protein = Math.round(prots / this.props.portion)
        this.nutes.Kolhydrater = Math.round(carbs / this.props.portion)

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
        {Object.keys(this.nutes).map(key => (
            <ReadRecipeNutrition
              key={key}
              nutrientName={key}
              nutrientValue={this.nutes[key]}
              prots={this.nutes}
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
