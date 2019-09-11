import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCardContainer from "./foodCardContainer";
import HomePageRecipeHeadline from "./homePageRecipeHeadline";

class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <React.Fragment>
        <div className="search-bar">
          <input className="form-control search-input" type="text" placeholder="Sök efter recept här..." aria-label="Sök efter recept här..." />
        </div>
        <div>
          <HomePageRecipeHeadline />
        </div>
        <div>
          <FoodCardContainer />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;