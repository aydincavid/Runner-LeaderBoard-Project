import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import UsersList from "../Lists/UserList";

import Options from "../SortOptions/Options";

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <Options></Options>
          </Col>
          <Col xs="9">
            <UsersList></UsersList>
          </Col>
        </Row>
      </div>
    );
  }
}
