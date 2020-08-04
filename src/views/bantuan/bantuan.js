import React, { Component } from "react";

import { Container } from "@material-ui/core";
import MainAppBar from "../../components/main-app-bar";

export default class Bantuan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <MainAppBar title="Bantuan" />
        <Container component="main" maxWidth="xs"></Container>
      </React.Fragment>
    );
  }
}
