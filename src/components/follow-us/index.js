import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";

const styles = {
  container: {
    width: "100%",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    minHeight: "150px",
    alignItems: "center",
  },
};

export default class FollowUs extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Button style={{ width: "90%" }} variant="contained" color="primary">
          {" "}
          <Facebook />
          FOLLOW US ON FACEBOOK
        </Button>
        <Button style={{ width: "90%" }} variant="contained" color="secondary">
          {" "}
          <Instagram />
          FOLLOW US ON INSTAGRAM
        </Button>
      </div>
    );
  }
}
