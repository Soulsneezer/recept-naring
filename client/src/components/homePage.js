import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCardContainer from "./foodCardContainer.js"

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
			<div className="search-bar">
				<input className="form-control search-input" type="text" placeholder="Sök efter recept här..." aria-label="Sök efter recept här..."/>
			</div>
      <FoodCardContainer/>
      </React.Fragment>
    );
  }
}

export default HomePage;