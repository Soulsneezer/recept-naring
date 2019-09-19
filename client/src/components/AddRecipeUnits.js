import React from "react";
import { Dropdown} from "react-bootstrap";

import { units } from './units';

class AddRecipeUnits extends React.Component {
    render() {
        
        return (
            <React.Fragment>
                
                <Dropdown className="dropdown-units p-0">
                    <Dropdown.Toggle className="dropdown-units px-2" variant="outline-secondary">
                        Vilken enhet?
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-link" href="#/action-1" eventKey="1">{units[0]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-2" eventKey="2">{units[1]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-3" eventKey="3">{units[2]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-4" eventKey="4">{units[3]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-5" eventKey="5">{units[4]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-6" eventKey="6">{units[5]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-7" eventKey="7">{units[6]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-8" eventKey="8">{units[7]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-9" eventKey="9">{units[8]}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-link" href="#/action-10" eventKey="10">{units[9]}</Dropdown.Item>
                       
                    </Dropdown.Menu>
                </Dropdown>
              
                </React.Fragment>
        )
    }
}

export default AddRecipeUnits;
