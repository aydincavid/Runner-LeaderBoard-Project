import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Navi></Navi>
        <DashBoard></DashBoard>
      </Container>
    );
  }
}
