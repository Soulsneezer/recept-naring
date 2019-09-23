import React from "react";
import PersonChoices from "./PersonChoices";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeInstructions from "./readRecipeInstructions";
import ReadRecipeIngredients from "./readRecipeIngredients";
import { Container, Col, Row, Image } from "react-bootstrap";
import REST from "../REST";

class Recipe extends REST {}
class ReadRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.loadFromUrl();
    this.recipe = "";
  }
  async loadFromUrl() {
    let data = await Recipe.find(
      `.find({_id:'${this.props.match.params.id}'})`
    );
    this.recipe = data.pop();
    console.log(this.recipe.img);
    this.setState({
      state: this.state,
      image: this.recipe.img
    });
  }

  handleChildClick(numberOfPersons) {
    this.setState({ numberOfPersons: numberOfPersons });
  }

  render() {
    return (
      <Container className='text-left fluid'>
        {this.recipe ? <ReadRecipeDetails {...this.recipe} /> : null}
        <Row className='mt-5'>
          <Col className='md-3 mt-5'>
            <h3 className='mb-2 offset-1'> Ingredienser</h3>
            {this.recipe ? (
              <ReadRecipeIngredients
                numberOfPersons={this.state.numberOfPersons}
                ingredients={this.recipe.ingredient}
                portion={this.recipe.portion}
              />
            ) : null}
          </Col>
          <Col className='md-9 mt-5'>
            <h3 className='mb-2 offset-1'> Steg för steg</h3>
            {this.recipe.step ? (
              <ReadRecipeInstructions steps={this.recipe.step} />
            ) : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReadRecipe;
