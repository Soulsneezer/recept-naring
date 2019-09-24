import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCard from './foodCard.js'
import { Container } from 'react-bootstrap';
import REST from '../REST.js';

class Recipe extends REST{}

export default class FoodCardContainer extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {
      recipes: [],
      countRecipe: 4,
      recipesLength: 0
    };
  }

  async componentDidMount() {
    let recipes = await Recipe.find();
    let recipesLength = recipes.length;
    this.setState({
      recipes: recipes,
      recipesLength: recipesLength
    })
  }

  async showMoreRecipes() {
    this.state.countRecipe += 4;
    let recipes = await Recipe.find();
    recipes = recipes.splice(0, this.state.countRecipe);

    this.setState({
      recipes: recipes,
      countRecipe: this.state.countRecipe
    });
  }

  
  render() {
    return (
      <React.Fragment>
        <Container>
          <div className="foodCardContainer container-outer">
            {this.state.recipes.map(recipe => (
              <FoodCard key={recipe._id} recipe={recipe}/>
            ))}
          </div>
          {/* <Button
            className='show-more-btn'
            onClick={this.showMoreRecipes}
            aria-label="knapp för att visa fler recept"
          >
            {this.state.recipesLength <= this.state.countRecipe
              ? 'Inga fler recept'
              : 'Visa fler recept'}
          </Button> */}
        </Container>
      </React.Fragment>
    );
  }
}