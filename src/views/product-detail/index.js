import React, { Component } from "react";
import SparepartAppBar from "../../components/sparepart-app-bar";
import { Container, Button } from "@material-ui/core";

const styles = {
  container: {
    backgroundColor: "#FBFBFB",
    // height: "100vh",

    display: "flex",
    // alignItems:"center"
    // justifyContent: "center",
    padding: "0",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default class ProductDetail extends Component {
  componentWillMount() {}

  render() {
    return (
      <React.Fragment>
        <SparepartAppBar />
        <Container style={styles.container} component="main" maxWidth="xs">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   backgroundColor: "red",
              marginTop: "65px",
              maxWidth: "446px",
              //   maxHeight: "00px",
            }}
          >
            <img
              style={{
                maxWidth: "95%",
              }}
              src="https://www.sumberrejekimotor.com/image-product/img4213-1510060333.jpg"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              width: "90%",
              //   maxHeight: "50px",
              //   backgroundColor: "red",
            }}
          >
            <p>Tromol Trusty Beat Chrome TDR</p>
            <p style={{ color: "red" }}>Rp230,000</p>
          </div>
          <hr style={{ width: "95%", height: "0.01px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              //   backgroundColor: "red",
              width: "90%",
              minHeight: "250px",
            }}
          >
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              Deskripsi Produk
            </p>
            <p style={{ fontSize: "12px" }}>
              Compatible Untuk Kendaraan Honda Beat 2018
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              backgroundColor: "white",
              position: "fixed",
              height: "60px",
              bottom: "0",
              maxWidth: "446px",
            }}
          >
            <Button
              style={{
                width: "42%",
                backgroundColor: "white",
                color: "#FB0000",
              }}
              variant="contained"

              // color="secondary"
            >
              Tanya CS
            </Button>
            <Button
              style={{
                width: "42%",
                backgroundColor: "#FB0000",
                color: "white",
              }}
              variant="contained"

              // color="secondary"
            >
              + KERANJANG
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
