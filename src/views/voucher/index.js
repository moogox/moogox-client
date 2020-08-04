import React, { Component } from "react";
import Appbar from "../../components/app-bar";
import { Container } from "@material-ui/core";
import VoucherCard from "../../components/voucher-card";

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
    marginTop: "60px",
  },
};

export default class Voucher extends Component {
  render() {
    return (
      <React.Fragment>
        <Appbar title="Voucher Saya" />
        <Container style={styles.container} component="main" maxWidth="xs">
          <div style={styles.secondLayer}>
            <VoucherCard />
            <VoucherCard /> <VoucherCard />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
