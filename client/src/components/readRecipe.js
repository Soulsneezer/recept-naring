import REST from "../REST.js"
import React, { Component } from "react";

class Recipe extends REST{}

export default class ReadRecipe extends Component {
    constructor(props) {
      super(props);
      this.hej = {}
      
      this.state = {}
      this.test();
    }
    async test(){
        console.log(this.props.match.params.id)
        this.hej = await Recipe.find(
            `.findOne({_id:'${this.props.match.params.id}'})`
          );
        this.setState({ state: this.state });
        console.log(this.hej.name)
        }

    render() {
        return (
          <React.Fragment>

          </React.Fragment>
        );
      }
}

