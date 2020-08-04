import React, { Component } from "react";
import Appbar from "../../components/app-bar";
import { Container, Card, Button } from "@material-ui/core";
import ImgCod from "../../assets/cod.svg";
import ImgArrow from "../../assets/arrow.svg";
import ImgBni from "../../assets/bni.png";
import ImgBca from "../../assets/bca.png";
import ImgMandiri from "../../assets/mandiri.png";
import ImgBri from "../../assets/bri.png";
import SimpleAppbar from "../../components/simple-appbar";
import TotalPembyaran from "../../components/total-pembayaran";
import PaymentSteps from "../../components/payment-steps";

const styles = {
  container: {
    backgroundColor: "",
    // height: "100vh",
    display: "flex",
    padding: "0",
    alignItems: "center",
    flexDirection: "column",
  },
  subContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor:""
    width: "100%",
    marginTop: "50px",
  },
  checking: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    backgroundColor: "rgba(255, 245, 0, 0.29)",
    textAlign: "center",
    fontSize: "10px",
    color: "red",
    marginTop: "10px",
  },
  buttonField: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    // backgroundColor: "white",
    minHeight: "100px",
  },
  buttonRedTextWhite: {
    width: "90%",
    backgroundColor: "#FB0000",
    color: "white",
    fontSize: "12px",
  },
  buttonWhiteTextRed: {
    width: "90%",
    backgroundColor: "white",
    color: "#FB0000",
    fontSize: "12px",
  },
};

export default class DetailPembayaran extends Component {
  state = {
    message: "FAILED",
  };

  handleBniMethod = () => {
    alert("hello world");
  };

  componentWillMount() {}

  renderHandler = () => {
    switch (this.state.message) {
      case "CHECKING":
        return <p>Bukti transfer anda sedang kami proses</p>;
        break;
      case "FAILED":
        return (
          <div style={styles.buttonField}>
            <Button style={styles.buttonRedTextWhite} variant="contained">
              Upload Bukti Transfer Ulang
            </Button>
          </div>
        );
      default:
        return (
          <div style={styles.buttonField}>
            <Button style={styles.buttonRedTextWhite} variant="contained">
              Upload Bukti Transfer Sekarang
            </Button>
            <Button style={styles.buttonWhiteTextRed} variant="contained">
              Upload Bukti Transfer Nanti
            </Button>
          </div>
        );
    }
  };

  render() {
    return (
      <React.Fragment>
        <SimpleAppbar title="Detail Pembayaran" />
        <Container style={styles.container}>
          <div style={styles.subContainer}>
            <TotalPembyaran />
            <PaymentSteps />
            {this.renderHandler()}
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
