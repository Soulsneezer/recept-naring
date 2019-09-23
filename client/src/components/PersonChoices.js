import React from "react";
import { Dropdown } from "react-bootstrap";

export default class PersonChoices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [2,3,4,5,6,7,8,9,10],
      showMenu: false,
      myAlternative: 0
    };
    this.dropDownAlternative = this.dropDownAlternative.bind(this);
    
  }

  dropDownAlternative(e) {
    let myAlternative = e;
    this.setState({
      myAlternative: myAlternative
    })
  }

  render() {
  
    return (
      <Dropdown className='dropdown' alignRight >
        <Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
          {this.state.myAlternative ? this.state.myAlternative + " Personer" : this.props.portion  + " Personer"}
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropdown-menu'>
          {this.state.choices.map(i => (
            <Dropdown.Item
              key={i}
              className='ddd'
              id={i}
              value={i}
              onClick={() => {this.props.onClick(i); this.dropDownAlternative(i)}}
            >
              {i}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
