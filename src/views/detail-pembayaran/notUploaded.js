import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class notUploaded extends Component {
  render() {
    return (
      <div>
        <Button
          style={{
            width: "90%",
            backgroundColor: "#FB0000",
            color: "white",
          }}
          variant="contained"
          //   onClick={this.handleSubmit}
          // color="secondary"
        >
          UPLOAD BUKTI TRANSFER SEKARANG
        </Button>
        <Button
          style={{
            width: "90%",
            backgroundColor: "white",
            color: "#FB0000",
          }}
          variant="contained"
        >
          UPLOAD BUKTI TRANSFER NANTI
        </Button>
      </div>
    );
  }
}
