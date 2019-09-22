import React from "react";
import { Dropdown } from "react-bootstrap";

export default class PersonChoices extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      myAlternative: ""
    };
    this.dropDownAlternative = this.dropDownAlternative.bind(this);
  }

  dropDownAlternative(e) {
    let myAlternative = e.target.id;
    this.setState({
      myAlternative: myAlternative
    });
  }

  render() {
    let choices = [];
    //method to select the number of people from the dropdown menu

    for (let i = 2; i <= 10; i++) {
      choices.push(i);
    }
    return (
      <Dropdown className='dropdown'>
        <Dropdown.Toggle
          className='recipe-btn'
          variant='outline-secondary'
          id='dropdown-basic'
        >
          {this.state.myAlternative + " Personer"}
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu'>
          {choices.map(i => (
            <Dropdown.Item id={i} onClick={this.dropDownAlternative}>
              {i}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
