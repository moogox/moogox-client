import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  BrowserRouter,
  Link,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./views/login/Login";
import Register from "./views/register";
import EmailConfirmationPage from "./views/email-confirmation";
import ForgotPasswordRequest from "./views/forgot-password-request";
import ForgotPasswordForm from "./views/forgot-password-form";
import EmailVerification from "./views/email-verification-succes";
import { setAuthIsSignedIn } from "./store/actions/auth";
import { setUserIsLogin } from "./store/actions/auth";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const user = JSON.parse(sessionStorage.getItem("isSignedInd"));
      if (user === false) {
        return [
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />,
        ];
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

class App extends Component {
  componentWillMount() {
    this.props.setAuthIsSignedIn();
  }

  componentDidMount() {
    console.log(this.props.isSignedIn);
  }

  state = {
    isSignedIn: false,
    user: null,
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route
              exact
              path="/email-confirmation"
              component={EmailConfirmationPage}
            />
            <Route path="/register" exact component={Register} />
            <Route path="/" exact render={() => <Redirect to="/home" />} />
            <Route
              exact
              path="/forgot-password/request"
              component={ForgotPasswordRequest}
            />
            <Route
              exact
              path="/forgot-password/form"
              component={ForgotPasswordForm}
            />
            <Route
              exact
              path="/email-verification/:id"
              component={EmailVerification}
            />

            <PrivateRoute path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthIsSignedIn: () => dispatch(setAuthIsSignedIn()),
    setUserLogin: (user) => dispatch(setUserIsLogin(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
