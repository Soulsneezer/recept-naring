import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
			<div className="search-bar">
				<input className="form-control search-input" type="text" placeholder="Sök efter recept här..." aria-label="Sök efter recept här..."/>
			</div>
    );
  }
}

export default HomePage;