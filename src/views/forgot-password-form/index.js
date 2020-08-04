import React, { Component } from "react";
import { Container } from "@material-ui/core";
import MoogoxImg from "../../assets/moogox.svg";

export default class ForgotPasswordForm extends Component {
  render() {
    return (
      <Container style={styles.container} component="main" maxWidth="xs">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "row",
            width: "100%",
            minHeight: "170px",
            // backgroundColor: "yellow",
          }}
        >
          <img src={MoogoxImg} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            // width: "150px",
            width: "100%",
            // backgroundColor: "red",
            minHeight: "200px",
            flexDirection: "column",
          }}
        >
          <input
            style={{
              width: "85%",
              height: "42px",
              backgroundColor: "#F5F5F5",
              border: "none",
              color: "black",
              borderRadius: "5px",
              outline: "none",
            }}
            placeholder=" Ketik Password Baru"
            onChange={this.handleChangeUsername}
          />
          <input
            style={{
              width: "85%",
              height: "42px",
              borderRadius: "5px",
              backgroundColor: "#F5F5F5",
              border: "none",
              color: "black",
              outline: "none",
            }}
            placeholder=" Ketik Ulang Password Baru"
            onChange={this.handleChangePassword}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            // width: "150px",
            width: "85%",
            // backgroundColor: "red",
            minHeight: "150px",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              width: "50%",
              height: "40px",
              backgroundColor: "#FF0202",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            KONFIRMASI
          </button>
        </div>
      </Container>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    padding: "0",
    display: "flex",
    backgroundColor: "white",
    minHeight: "100vh",
    flexDirection: "column",
    // alignItems:
    // justifyContent: "center",
    alignItems: "center",
  },
};
