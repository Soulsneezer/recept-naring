import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default class PersonChoices extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    let choices = [];
    let selector;
    //method to select the number from the dropdown menu

    for (let i = 1; i <= 10; i++) {
      choices.push(i);
    }
    return (
      <DropdownButton
        className='offset-8'
        onClick={this.showMenu}
        variant='Secondary'
        id='dropdown-item-button'
        title='Personer'
      >
        {choices.map(i => (
          <Dropdown.Item key={i} as='button'>
            {i}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }
}

// Someone else: <PersonChoices btnColor="blue"></PersonChoices>
// I can read it from this.props
