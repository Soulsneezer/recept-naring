import React, { Component } from 'react';
import {
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Card,
  DropdownButton,
  Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import FoodCardContainer from './foodCardContainer.js';
import REST from '../REST.js';

class Recipez extends REST {}
class Recipeswiththiscategory extends REST {}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.searchHandler = this.searchHandler.bind(this);
    this.showMoreRecipes = this.showMoreRecipes.bind(this);
    this.showMoreRecipeCategorys = this.showMoreRecipeCategorys.bind(this);
    this.selectDropdownAlternative = this.selectDropdownAlternative.bind(this);

    this.state = {
      recipes: [],
      recipesCategory: [],
      searchInput: '',
      countRecipe: 4,
      countCategory: 4,
      recipesLength: 0,
      recipesCategorysLength: 0,
      myAlternative: 'Titel'
    };
  }

  async searchHandler(e) {
    let searchInput = e.target.value;
    if (!searchInput) {
      this.setState({
        recipes: [],
        countRecipe: 4,
        recipesCategory: [],
        countCategory: 4
      });
    }
    this.setState({
      searchInput: e.target.value
    });

    if (searchInput == 0) {
      return;
    }
    if (searchInput) {
      let recipes = await Recipez.find(searchInput);
      let recipesLength = recipes.length;

      let recipesCategory = await Recipeswiththiscategory.find(searchInput);
      let recipesCategorysLength = recipesCategory.length;

      recipesCategory = recipesCategory.slice(0, this.state.countCategory);
      recipes = recipes.slice(0, this.state.countRecipe);

      this.setState({
        recipes: recipes,
        recipesLength: recipesLength,
        recipesCategory: recipesCategory,
        recipesCategorysLength: recipesCategorysLength
      });
    }
  }

  async showMoreRecipes() {
    this.state.countRecipe += 4;
    let recipes = await Recipez.find(this.state.searchInput);
    recipes = recipes.splice(0, this.state.countRecipe);

    this.setState({
      recipes: recipes,
      countRecipe: this.state.countRecipe
    });
  }

  async showMoreRecipeCategorys() {
    this.state.countCategory += 4;
    let recipesCategory = await Recipeswiththiscategory.find(
      this.state.searchInput
    );
    recipesCategory = recipesCategory.splice(0, this.state.countCategory);

    this.setState({
      recipesCategory: recipesCategory,
      countCategory: this.state.countCategory
    });
  }

  selectDropdownAlternative(e) {
    let myAlternative = e.target.id;
    this.setState({
      myAlternative: myAlternative
    });
  }

  render() {
    return (
      <div>
        <div className='search-bar'>
          <InputGroup className='search-field'>
            <FormControl
              className='search-input'
              onChange={this.searchHandler}
              value={this.state.searchInput}
              placeholder={`Sök recept efter:`}
              aria-label={`Sök recept efter:`}
            />
          </InputGroup>
          <DropdownButton
            title={this.state.myAlternative}
            className='dropdown-btn'
            alignRight
          >
            <Dropdown.Item id='Titel' onClick={this.selectDropdownAlternative}>
              Titel
            </Dropdown.Item>
            <Dropdown.Item
              id='Kategori'
              onClick={this.selectDropdownAlternative}
            >
              Kategori
            </Dropdown.Item>
          </DropdownButton>
        </div>

        {this.state.searchInput == 0 ? (
          <FoodCardContainer />
        ) : this.state.myAlternative === 'Titel' ? (
          this.state.recipes.length === 0 ? (
            this.state.searchInput !== '' ? (
              <Container className='container-outer'>
                <Row className='container-title'>
                  <Col>
                    <h2 className='card-h1'>0 sökträffar på titel</h2>
                  </Col>
                </Row>
              </Container>
            ) : (
              ''
            )
          ) : (
            <Container className='container-outer'>
              <Row className='container-title'>
                <Col>
                  <h1 className='card-h1'>Sökresultat på titel</h1>
                </Col>
              </Row>
              <Row className='container-inner'>
                {this.state.recipes.map(recipe => (
                  <div className='card-outer special' key={recipe._id}>
                    <div className='card-inner'>
                      <img
                        className='card-img'
                        src={require('../images/' + recipe.img)}
                        alt={'En bild på ' + recipe.name}
                      />
                      <Card.Title className='card-title'>
                        <h5 className='card-p'>{recipe.name}</h5>
                      </Card.Title>
                      <Button
                        className='card-button'
                        href={'/recipe/' + recipe._id}
                      >
                        Gå till recept
                      </Button>
                    </div>
                  </div>
                ))}
              </Row>
              <Button className='show-more-btn' onClick={this.showMoreRecipes}>
                {this.state.recipesLength <= this.state.countRecipe
                  ? 'Inga fler recept'
                  : 'Visa fler recept'}
              </Button>
            </Container>
          )
        ) : this.state.recipesCategory.length === 0 ? (
          this.state.searchInput !== '' ? (
            <Container className='container-outer'>
              <Row className='container-title'>
                <Col>
                  <h2 className='card-h1'>0 sökträffar på kategori</h2>
                </Col>
              </Row>
            </Container>
          ) : (
            ''
          )
        ) : (
          <Container className='container-outer'>
            <Row className='container-title'>
              <Col>
                <h1 className='card-h1'>Sökresultat på kategori</h1>
              </Col>
            </Row>
            <Row className='container-inner'>
              {this.state.recipesCategory.map(recipe => (
                <div className='card-outer special' key={recipe._id}>
                  <div className='card-inner'>
                    <img
                      className='card-img'
                      src={require('../images/' + recipe.img)}
                      alt={'En bild på ' + recipe.name}
                    />
                    <Card.Title className='card-title'>
                      <h5 className='card-p'>{recipe.name}</h5>
                    </Card.Title>
                    <Button
                      className='card-button'
                      href={'/recipe/' + recipe._id}
                    >
                      Gå till recept
                    </Button>
                  </div>
                </div>
              ))}
            </Row>
            <Button
              className='show-more-btn'
              onClick={this.showMoreRecipeCategorys}
            >
              {this.state.recipesCategorysLength <= this.state.countCategory
                ? 'Inga fler recept'
                : 'Visa fler recept'}
            </Button>
          </Container>
        )}
      </div>
    );
  }
}

export default HomePage;
