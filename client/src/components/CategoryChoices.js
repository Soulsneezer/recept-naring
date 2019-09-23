import React from 'react';
import { InputGroup, Dropdown } from 'react-bootstrap'

class CategoryChoices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mySelection: 'kategori'
    }
  }

  selectedDropdown(e) {
    let mySelection = e.target.id;
    this.setState({
      mySelection: mySelection
    })

  }

  render() {
    return (
      <React.Fragment>
        <Dropdown
          className="category-dropdown-button"
          title={this.state.mySelection}>
          <Dropdown.Toggle
            variant="outline-secondary"
            className="category-dropdown">
            {this.state.mySelection}
          </Dropdown.Toggle>


          <Dropdown.Menu className="category-dropdown-menu">
            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-1"
                eventKey="1"
                id='vegansk'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Vegansk</Dropdown.Item>
            </InputGroup.Prepend>


            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-2"
                eventKey="1"
                id='vegetarisk'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Vegetarisk</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-3"
                eventKey="1"
                id='fisk'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Fisk</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-4"
                eventKey="1"
                id='kött'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Kött</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-5"
                eventKey="1"
                id='förrätt'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Förrätt</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-6"
                eventKey="1"
                id='huvudrätt'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Huvudrätt</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-7"
                eventKey="1"
                id='efterrätt'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Efterrätt</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-8"
                eventKey="1"
                id='glutenfri'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Glutenfri</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-9"
                eventKey="1"
                id='laktosfri'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Laktosfri</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="px-1"
                href="#/action-10"
                eventKey="1"
                id='bakverk'
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Bakverk</Dropdown.Item>
            </InputGroup.Prepend>

          </Dropdown.Menu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

export default CategoryChoices;