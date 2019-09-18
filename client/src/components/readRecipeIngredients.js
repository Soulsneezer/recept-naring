import React, { Component } from "react";
import { Row, Col, Card, ListGroupItem, ListGroup } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}

class ReadRecipeIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.recipe = {};
    this.getRecipe();
  }
  async getRecipe() {
    this.recipe = await Recipe.find(
      `.findOne({_id: "5d80ae6cbfb4181b341ebdf3"})`
    );

    console.log("this.recipe Ingredient", this.recipe.ingredient);
    // let recipe = await Recipe.find(this.props._id);
    //this.setState({ state: this.state });
    this.render();

    console.log("this.recipe Ingredient nammmmme", this.recipe.ingredient);
  }
  //   async getIngredient() {
  //     let key = {};
  //     let Ingredient = () => {
  //       this.recipe.ingredient.map(<li key={key}>{this.props.ingredient}</li>);
  //     };
  //   }

  render() {
    return (
      <React.Fragment>
        <ol>
          {/* <li>{this.recipe.step}</li> */}

          <li>
            <p>
              Koka pastan enligt anvisningar på förpackningen.Fräs kycklingen på
              medelvärme tills den får lite färg runt om i cirka 5 minuter.
              Salta och peppra.Finhacka vitlöken och chilin och stek med
              kycklingen i cirka 2 minuter.Krydda med timjan och oregano och
              häll i buljongen, grädden och kokta upp, dra till sidan och
              tillsätt parmesanen.
            </p>
          </li>
        </ol>
      </React.Fragment>
    );
  }
}

export default ReadRecipeIngredients;
