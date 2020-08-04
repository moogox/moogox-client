import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Appbar from "../../components/app-bar";
import TopWallet from "../../components/top-wallet";
import ActivityWallet from "../../components/activity-wallet";

const styles = {
  container: {
    width: "100%",
    padding: "0",
    display: "flex",
    // backgroundColor: "gray",
    flexDirection: "column",
    // backgroundColor:"whit"
    minHeight: "100vh",
    alignItems: "center",
    // marginTop: "60px",
  },
  secondLayer: {
    width: "100%",
    padding: "0",
    display: "flex",
    // backgroundColor: "red",
    flexDirection: "column",
    // backgroundColor:"whit"
    // minHeight: "100vh",
    alignItems: "center",

    marginTop: "50px",
  },
  activity: {
    width: "100%",
    // backgroundColor: "yellow",
    display: "flex",
    // pading: "10px 0px 10px 0px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default class Wallet extends Component {
  render() {
    return (
      <React.Fragment>
        <Appbar title="Saldo Saya" />
        <Container style={styles.container} component="main" maxWidth="xs">
          <div style={styles.secondLayer}>
            <TopWallet />
          </div>
          <div style={styles.activity}>
            <div
              style={{
                display: "flex",
                // backgroundColor: "blue",
                width: "90%",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <p>Activity</p>
            </div>
            <ActivityWallet />
            <ActivityWallet />
            <ActivityWallet />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
