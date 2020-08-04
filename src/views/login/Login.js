import React, { Component } from "react";
import { Container } from "@material-ui/core";
import MoogoxImg from "../../assets/moogox.svg";
import Axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { setUserIsLogin, setAuthIsSignedIn } from "../../store/actions/auth";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    user: {
      _id: "hello",
      pass: "tatatato",
      email: "tatamf.id@gmail.com",
    },
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({ loading: true });
    Axios({
      method: "POST",
      url: "http://moogox-service.herokuapp.com/api/users/login",
      headers: { "Content-Type": "application/json" },
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then((res) => {
        this.setState({ loading: false });
        this.props.setAuthIsSignedIn();
        setTimeout(() => {
          this.props.setUserIsLogin(this.state.user);
          sessionStorage.setItem("user from redux", this.props.user);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

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
            placeholder=" Email"
            onChange={this.handleChangeEmail}
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
            placeholder=" Password"
            onChange={this.handleChangePassword}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            // width: "150px",
            width: "85%",
            // backgroundColor: "blue",
            minHeight: "50px",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "#FF0202" }}>Lupa Password ?</p>
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
            onClick={this.handleSubmit}
          >
            {this.state.loading && <CircularProgress size={15} />}
            {!this.state.loading && <span>MASUK</span>}
          </button>
        </div>
        <p>
          belum punya akun ? <span style={{ color: "#FF0202" }}>Daftar</span>
        </p>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthIsSignedIn: () => dispatch(setAuthIsSignedIn()),
    setUserIsLogin: (user) => dispatch(setUserIsLogin(user)),
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
