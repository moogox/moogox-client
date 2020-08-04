import React, { Component } from "react";
import { Card } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    height: "150px",
    borderWidth: "1px",
    // borderColor: "gray",
    borderStyle: "ridge",
    width: "100%",
    // backgroundColor: "red",
  },
};

export default class AccountCard extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
            width: "30%",
          }}
        >
          <img
            style={{ maxWidth: "80px", height: "80px", borderRadius: "50%" }}
            src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          />
        </div>
        <div style={{ width: "70%" }}>
          <p>Talenta Maulana F</p>
          <p>tatamf.id@gmail.com</p>
        </div>
      </div>
    );
  }
}
