import React from "react";
import ReadRecipeDetails from "./readRecipeDetails";
import ReadRecipeInstructions from "./readRecipeInstructions";
import ReadRecipeIngredients from "./readRecipeIngredients";
import { Container, Col, Row } from "react-bootstrap";
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
      `.find({_id:"${this.props.match.params.id}"})`
    );
    this.recipe = data.pop();
    this.setState({
      state: this.state,
    });
  }

  handleChildClick(numberOfPersons) {
    this.setState({ numberOfPersons: numberOfPersons });
  }

  render() {
    return (
      <Container className="text-left fluid container-fluid">
        {this.recipe ? <ReadRecipeDetails {...this.recipe} /> : null}
        <Row className="mt-5">
          <Col xs={{span: 10, offset:1}}  sm={{span: 3 , offset:1 }} md={{span: 4, offset:0}}className="pt-5">
            <h3 pb-3> Ingredienser</h3>
            {this.recipe ? (
              <ReadRecipeIngredients
                numberOfPersons={this.state.numberOfPersons}
                ingredients={this.recipe.ingredient}
                portion={this.recipe.portion}
              />
            ) : null}
          </Col>
          <Col xs={{span: 10, offset:1 }} sm={{span: 7, offset:1 }} md={{span:8, offset:0}} className="pt-5">
            <h3 sm={{ span: 12}}> Steg för steg</h3>
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
