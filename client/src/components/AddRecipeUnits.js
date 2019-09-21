import React from "react";
import { Dropdown } from "react-bootstrap";

import { units } from './units';

class AddRecipeUnits extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mySelection: 'måttet',
        };
    }

    selectedDropdown(e) {
        let mySelection = e.target.id;
        this.setState({
            mySelection: mySelection
        });
    }
    render() {
        

        return (
            <React.Fragment>
                <Dropdown
                    title={this.state.mySelection}
                    className="dropdown-units p-0"
                >
                    <Dropdown.Toggle
                        className="dropdown-units pl-2"
                        variant="outline-secondary">
                        {this.state.mySelection}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="units-dropdown-menu">
                    
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-1"
                            eventKey="1"
                            id='st'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[0]}</Dropdown.Item>


                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-2"
                            eventKey="2"
                            id='ml'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[1]}</Dropdown.Item>

                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-3"
                            eventKey="3"
                            id='dl'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[2]}</Dropdown.Item>
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-4"
                            eventKey="4"
                            id='l'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[3]}</Dropdown.Item>
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-5"
                            eventKey="5"
                            id='mg'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[4]}</Dropdown.Item>
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-6"
                            eventKey="6"
                            id='g'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[5]}</Dropdown.Item>
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-7"
                            eventKey="7"
                            id='kg'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[6]}</Dropdown.Item>
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-8"
                            eventKey="8"
                            id='krm'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[7]}</Dropdown.Item>
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-9"
                            eventKey="9"
                            id='tsk'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[8]}</Dropdown.Item>
                        <Dropdown.Item
                            className="dropdown-link"
                            href="#/action-10"
                            eventKey="10"
                            id='msk'
                            value={this.mySelection}
                            onClick={e => this.selectedDropdown(e)}>{units[9]}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </React.Fragment>
        )
    }
}

export default AddRecipeUnits;
