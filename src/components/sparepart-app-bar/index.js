import React, { Component } from "react";
import {
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Container,
} from "@material-ui/core";
import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { withRouter } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
const styles = {
  appbar: {
    width: "100%",
    maxWidth: 446,
    position: "fixed",
    top: 0,
    // maxHeight: "400px",
    display: "flex",
    justifyContent: "space-between",
    // padding: "10px",
    // top: 0,
    backgroundColor: "white",
    minHeight: "60px",
    boxShadow: "0px 0px 2px 1px #B9B9B9",
  },
};

class SparepartAppBar extends Component {
  handleRoute = () => {
    this.props.history.push("/search");
  };

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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            // backgroundColor: "red",
            width: "87%",
          }}
        >
          <input
            style={{
              minHeight: "35px",
              outline: "none",
              width: "300px",
              border: "none",
              backgroundColor: "#EFEFEF",
            }}
            placeholder="Cari Sparepart"
          />
          <IconButton
            style={{ marginLeft: "15px" }}
            aria-label="delete"
            size="big"
          >
            <Badge badgeContent={1} color="secondary">
              <ShoppingCart
                // style={{ marginLeft: "10px" }}
                fontSize="inherit"
              />
            </Badge>
          </IconButton>
        </div>
      </div>
    );
  }
}

export default withRouter(SparepartAppBar);
