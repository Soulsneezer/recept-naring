import React from 'react';
import { InputGroup, Dropdown } from 'react-bootstrap'

class CategoryChoices extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return ( 
      <Dropdown className="category-dropdown-button px-0" onClick={e => this.setState({})}>
        <Dropdown.Toggle variant="outline-secondary" className="category-dropdown">
          Kategorier
      </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu px-0">
          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-1">Vegansk</Dropdown.Item>
          </InputGroup.Prepend>


          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-2">Vegetarisk</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-3">Fisk</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-4">Kött</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-5">Förrätt</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-6">Huvudrätt</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-7">Efterrätt</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-8">Glutenfri</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-9">Laktosfri</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
            <Dropdown.Item className="px-1" href="#/action-10">Bakverk</Dropdown.Item>
          </InputGroup.Prepend>

        </Dropdown.Menu>
      </Dropdown>
    )
  }

}

export default CategoryChoices;