import React, { Component } from "react";
import { Container } from "@material-ui/core";
import PlaneImg from "../../assets/plane.svg";
import Axios from "axios";

export default class EmailConfirmationPage extends Component {
  state = {
    email: "",
    name: "",
    _id: "",
  };

  componentWillMount() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    this.setState({
      email: user.email,
      name: user.name,
      _id: user._id,
    });
    Axios({
      method: "POST",
      url:
        "http://moogox-service.herokuapp.com/api/users/SendEmailConfirmation",
      headers: { "Content-Type": "application/json" },
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
          <p>Hi {this.state.name}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            width: "80%",
            minHeight: "130px",
            // backgroundColor: "blue",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "15px" }}>
            Kurang Satu Langkah Lagi Untuk Melengkapi Pendaftaran Kamu
          </p>
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
          <img src={PlaneImg} />
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
            Kami Telah Mengirimkan Email Ke{" "}
            <span style={{ fontWeight: "bold" }}>{this.state.email}</span> Yang
            Berisikan Tautan Untuk Menuju Ke Halaman Konfirmasi Email , Mohon
            Lakukan Konfirmasi Email
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 245, 0, 0.24)",
            width: "90%",
          }}
        >
          <p
            style={{ textAlign: "center", fontSize: "10px", color: "#FFC700" }}
          >
            Kami Perlu Memastikan Ke Valid An Email Yang Anda Gunakan ! Mohon
            Lakukan Konfirmasi Email
          </p>
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
