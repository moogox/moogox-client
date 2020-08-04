import React, { Component } from "react";
import { Card } from "@material-ui/core";

const styles = {
  container: {
    width: "90%",
    display: "flex",
    jusifyContent: "center",
    alignItems: "center",
    margin: "5px 0px 5px 0px",
    flexDirection: "column",
  },
  typeAndDate: {
    width: "90%",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  amount: {
    width: "90%",
    // backgroundColor: "green",
    display: "flex",
    maxHeight: "40px",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  ket: {
    width: "90%",
    // backgroundColor: "yellow",
    maxHeight: "50px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
};

export default class ActivityWallet extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <div style={styles.typeAndDate}>
          <p style={{ fontSize: "13px", fontWeight: "bold" }}>
            Withdrawal Saldo
          </p>
          <p style={{ fontSize: "12px" }}>21 Juli 2020 10:56</p>
        </div>
        <div style={styles.amount}>
          <p>+ Rp149.000</p>
        </div>
        <div style={styles.ket}>
          <p style={{ fontSize: "12px" }}>
            Penarikan Saldo Ke Rekening Bank ( BNI - Malicha Laela Rachmawati -
            0803997331 )
          </p>
        </div>
      </Card>
    );
  }
}
