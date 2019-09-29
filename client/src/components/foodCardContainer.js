import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FoodCard from './foodCard.js';
import { Container, Col, Button } from 'react-bootstrap';
import REST from '../REST.js';

class Recipe extends REST {}

export default class FoodCardContainer extends Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
    this.state = {
      recipes: [],
      countRecipe: 4,
      recipesLength: 4
    };
    this.showMoreRecipes = this.showMoreRecipes.bind(this);
  }

  async componentDidMount() {
    let recipes = await Recipe.find();
    recipes = recipes.splice(0, 4);
    let recipesLength = recipes.length;
    this.setState({
      recipes: recipes,
      recipesLength: recipesLength + 1
    });
  }

  async showMoreRecipes() {
    this.state.countRecipe += 4;
    let recipes = await Recipe.find();
    let recipesLength = recipes.length;
    recipes = recipes.splice(0, this.state.countRecipe);

    this.setState({
      recipes: recipes,
      recipesLength: recipesLength,
      countRecipe: this.state.countRecipe
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <div className='foodCardContainer container-outer'>
            {this.state.recipes.map(recipe => (
              <FoodCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
          <Col>
            {
              <Button
                className='show-more-btn'
                onClick={this.showMoreRecipes}
                aria-label='knapp för att visa fler recept'
              >
                {this.state.recipesLength <= this.state.countRecipe
                  ? 'Inga fler recept'
                  : 'Visa fler recept'}
              </Button>
            }
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}
