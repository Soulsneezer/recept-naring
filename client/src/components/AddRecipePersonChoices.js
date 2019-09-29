import React from "react";
import { Dropdown } from "react-bootstrap";

export default class PersonChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // choices: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      showMenu: false,
      // myAlternative: 0
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
      <Dropdown className="dropdown-person-choices">
        <Dropdown.Toggle
          aria-label="en dropdown knapp för att välja matkategori"
          className="person-choices-btn"
          variant="outline-secondary"
        >
          {this.state.myAlternative + " Personer"}
        </Dropdown.Toggle>
        <Dropdown.Menu className="person-choices-dropdown-menu">
          {choices.map(i => (
            <Dropdown.Item id={i} key={i} onClick={this.dropDownAlternative}>
              {i}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
