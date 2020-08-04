import React, { Component } from "react";
import { Container } from "@material-ui/core";
import MoogoxImg from "../../assets/moogox.svg";
import Axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

export default class Register extends Component {
  state = {
    email: "",
    name: "",
    numberPhone: "",
    password: "",
    loading: false,
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeNumberPhone = (e) => {
    this.setState({
      numberPhone: e.target.value,
    });
  };
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({
      loading: true,
    });
    Axios({
      method: "POST",
      url: "http://moogox-service.herokuapp.com/api/users/register",
      headers: { "Content-Type": "application/json" },
      data: {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        numberPhone: this.state.numberPhone,
      },
    })
      .then((res) => {
        this.setState({
          loading: false,
        });
        sessionStorage.setItem("user", JSON.stringify(res.data));
        this.props.history.push("/email-confirmation");
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  render() {
    return (
      <Container style={styles.container} component="main" maxWidth="xs">
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
            minHeight: "270px",
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
            onChange={this.handleChangeEmail}
            placeholder=" Email"
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
            onChange={this.handleChangeName}
            placeholder=" Nama Lengkap"
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
            onChange={this.handleChangeNumberPhone}
            placeholder=" Nomor HP"
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
            onChange={this.handleChangePassword}
            placeholder=" Password"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // width: "150px",
            width: "85%",
            // backgroundColor: "blue",
            minHeight: "90px",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "black", textAlign: "center", fontSize: "13px" }}>
            Dengan mendaftar anda menyetujui syarat & ketentuan kebijakan kami
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
            minHeight: "70px",
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
            onClick={this.handleSubmit}
          >
            {this.state.loading && <CircularProgress size={15} />}
            {!this.state.loading && <span>DAFTAR</span>}
          </button>
        </div>
        <p>
          sudah punya akun ? <span style={{ color: "#FF0202" }}>Masuk</span>
        </p>
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
