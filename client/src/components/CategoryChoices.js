import React from 'react';
import { FormControl, InputGroup, Dropdown } from 'react-bootstrap'

class CategoryChoices extends React.Component {

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="category-dropdown">
          Kategorier
      </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-1">Vegansk</Dropdown.Item>
          </InputGroup.Prepend>


          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-2">Vegetarisk</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-3">Fisk</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-4">Kött</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-5">Förrätt</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-6">Huvudrätt</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-7">Efterrätt</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-8">Glutenfri</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-9">Laktosfri</Dropdown.Item>
          </InputGroup.Prepend>

          <InputGroup.Prepend>
            <InputGroup.Checkbox className="category-checkbox m-2" aria-label="Checkbox" />
            <Dropdown.Item href="#/action-10">Bakverk</Dropdown.Item>
          </InputGroup.Prepend>

        </Dropdown.Menu>
      </Dropdown>
    )
  }

}

export default CategoryChoices;