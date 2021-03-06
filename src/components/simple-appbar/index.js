import React, { Component } from "react";
import {
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Container,
} from "@material-ui/core";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";

const styles = {
  appbar: {
    width: "100%",
    maxWidth: 446,
    position: "fixed",
    top: 0,
    // maxHeight: "400px",
    display: "flex",
    justifyContent: "flex-start",
    // padding: "10px",
    // top: 0,
    backgroundColor: "white",
    boxShadow: "0px 0px 2px 1px #B9B9B9",
  },
};

export default class SimpleAppbar extends Component {
  render() {
    return (
      <div style={styles.appbar}>
        <IconButton
          style={{ marginLeft: "15px" }}
          aria-label="delete"
          size="small"
        >
          <KeyboardBackspace
            // style={{ marginLeft: "10px" }}
            fontSize="inherit"
          />
        </IconButton>
        <p style={{ marginLeft: "5px" }}>{this.props.title}</p>
      </div>
    );
  }
}
