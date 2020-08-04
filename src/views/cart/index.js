import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import Appbar from "../../components/app-bar";
import CartCard from "../../components/cart-card";

const styles = {
  container: {
    // backgroundColor: "red",
    // height: "100vh",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",

    flexDirection: "column",
  },
};

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <Appbar title="Keranjang" />
        <Container style={styles.container} component="main" maxWidth="xs">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",

              alignItems: "center",
              height: "100%",
              marginTop: "55px",
              flexDirection: "column",
              padding: "0px 0px 120px 0px",
            }}
          >
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              backgroundColor: "white",
              position: "fixed",
              height: "100px",
              bottom: "0",
              maxWidth: "446px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // backgroundColor: "red",
                width: "92%",
              }}
            >
              <p>Total Belanja </p>
              <p>Rp152.000 </p>
            </div>
            <Button
              style={{
                width: "95%",
                backgroundColor: "#FB0000",
                color: "white",
              }}
              variant="contained"

              // color="secondary"
            >
              Lanjut Transaksi [ 2 ]
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
