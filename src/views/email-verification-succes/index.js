import React, { Component } from "react";
import { Container } from "@material-ui/core";
import SuccesImg from "../../assets/email-verification.svg";
import Axios from "axios";

export default class EmailVerification extends Component {
  state = {
    name: "",
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    Axios({
      method: "POST",
      url:
        "http://moogox-service.herokuapp.com/api/users/setUserActivityStatus",
      headers: { "Content-Type": "application/json" },
      data: {
        _id: id,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
            minHeight: "130px",
            // backgroundColor: "green",
          }}
        >
          <p>Hi Talenta Maulana F</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            minHeight: "150px",
            // backgroundColor: "yellow",
          }}
        >
          <img src={SuccesImg} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "80%",
            minHeight: "150px",
            // backgroundColor: "yellow",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "11px" }}>
            Terimakasi Telah Melakukan Konfrimasi Email Kini Akun Kamu Sudah
            Aktif Dan Sudah Bisa Digunakan
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            // width: "150px",
            width: "85%",
            // backgroundColor: "red",
            minHeight: "100px",
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
            MASUK
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
    // backgroundColor: "red",
    minHeight: "100vh",
    flexDirection: "column",
    // alignItems:
    // justifyContent: "center",
    alignItems: "center",
  },
};
