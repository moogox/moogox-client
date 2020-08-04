import React, { Component } from "react";
import { Container } from "@material-ui/core";
import ForgotPass from "../../assets/forgot-pass.svg";

export default class ForgotPasswordRequest extends Component {
  render() {
    return (
      <Container style={styles.container} component="main" maxWidth="xs">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            // backgroundColor: "pink",
            width: "100%",
            minHeight: "220px",
          }}
        >
          <img src={ForgotPass} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            // backgroundColor: "red",
            width: "100%",
            minHeight: "70px",
          }}
        >
          <p>Lupa Password ?</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "white",
            width: "80%",
            minHeight: "50px",
          }}
        >
          <p style={{ fontSize: "11px", textAlign: "center" }}>
            Tolong Masukan Email Kamu Yang Terdaftar , Kami Akan Mengirimkan
            Email Berupa Tautan Untuk Menuju Ke Halaman Reset Password
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "row",
            // backgroundColor: "blue",
            width: "100%",
            minHeight: "160px",
          }}
        >
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
            placeholder="Masukan Email Kamu Yang Terdaftar..."
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
            width: "100%",
            flexDirection: "row",
            minHeight: "120px",
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
            KIRIM
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
    // backgroundColor: "gray",
    minHeight: "100vh",
    flexDirection: "column",
    // alignItems:
    // justifyContent: "center",
    alignItems: "center",
  },
};
