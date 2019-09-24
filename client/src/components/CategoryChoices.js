import React from "react";
import { InputGroup, Dropdown } from "react-bootstrap"

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
          aria-label="en dropdown knapp för att välja matkategori"
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
                className="category-dropdown-item px-1"
                href="#/action-1"
                aria-label="vegansk kategori"
                eventKey="1"
                id="vegansk"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Vegansk</Dropdown.Item>
            </InputGroup.Prepend>


            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-2"
                aria-label="vegetarisk kategori"
                eventKey="1"
                id="vegetarisk"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Vegetarisk</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-3"
                aria-label="fisk kategori"
                eventKey="1"
                id="fisk"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Fisk</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-4"
                aria-label="kött kategori"
                eventKey="1"
                id="kött"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Kött</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-5"
                aria-label="förrätt kategori"
                eventKey="1"
                id="förrätt"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Förrätt</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-6"
                aria-label="huvudrätt kategori"
                eventKey="1"
                id="huvudrätt"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Huvudrätt</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-7"
                aria-label="efterrätt kategori"
                eventKey="1"
                id="efterrätt"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Efterrätt</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-8"
                aria-label="glutenfri kategori"
                eventKey="1"
                id="glutenfri"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Glutenfri</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-9"
                aria-label="laktosfri kategori"
                eventKey="1"
                id="laktosfri"
                value={this.mySelection}
                onClick={e => this.selectedDropdown(e)}>Laktosfri</Dropdown.Item>
            </InputGroup.Prepend>

            <InputGroup.Prepend>
              <InputGroup.Checkbox className="category-checkbox" aria-label="Checkbox" />
              <Dropdown.Item
                className="category-dropdown-item px-1"
                href="#/action-10"
                aria-label="bakverk kategori"
                eventKey="1"
                id="bakverk"
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