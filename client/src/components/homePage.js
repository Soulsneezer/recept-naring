import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import REST from "../REST.js";

class Makronutrient extends REST {
  static get baseRoute() {
    return "makronutrients";
  }
}


class HomePage extends Component {
  constructor(props) {
    super(props);

    // this.importJson = this.importJson.bind(this);
    this.showJson = this.showJson.bind(this);

    this.state = {livsmedel: []}

  }

  async componentDidMount(){
    let user = await Makronutrient.find();
    console.log(user)
  }

  // importJson() {
  //   console.log('Import Json')
  //   axios.get('http://localhost:3000/json/makronutrients')
  //   .then(response => {
  //     this.setState({ livsmedel: response.data });
  //   })
  //   .catch(function (error){
  //     console.log(error);
  //   })
  // }

  showJson() {
    console.log(Makronutrient);
    console.log('Show Json');
    console.log(this.state.livsmedel);
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input className="form-control search-input" type="text" placeholder="Sök efter recept här..." aria-label="Sök efter recept här..."/>
        </div>
        <button onClick={this.importJson}>Import Json</button>
        <button onClick={this.showJson}>Show Json</button>
        
      </div>
    );
  }
}

export default HomePage;