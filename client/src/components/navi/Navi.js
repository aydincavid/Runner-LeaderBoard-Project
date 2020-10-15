import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Herogi</NavbarBrand>

            <Collapse navbar>
              <Nav style={{fontSize:"1.3rem"}} className="mr-auto" navbar>
                <NavItem>
                  <NavbarBrand  href="https://github.com/aydincavid/Runner-LeaderBoard-Project">
                    GitHub
                  </NavbarBrand>
                </NavItem>
              </Nav>
              <NavbarText style={{fontSize : "1.3rem"}}>Runner Leaderboard</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
