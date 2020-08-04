import React, { Component } from "react";

import { Container, Button } from "@material-ui/core";
import MainAppBar from "../../components/main-app-bar";
import AccountCard from "../../components/account-card";
import FollowUs from "../../components/follow-us";

const styles = {
  continer: {
    width: "100%",
    padding: "0",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    // backgroundColor:"whit"
    alignItems: "center",
    marginTop: "60px",
  },
};

export default class Akun extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <MainAppBar title="Akun" />
        <Container style={styles.continer} component="main" maxWidth="xs">
          <AccountCard />
          <FollowUs />
          <div>
            <Button>Log Out</Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
