import React, { Component } from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FF3737",
    flexDirection: "column",

    // maxHeight: "100px",
    minHeight: "180px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: "13px",
    alignItems: "flex-start",
    width: "90%",

    flexDirection: "column",
    maxHeight: "25px",
    color: "white",
  },
  balance: {
    display: "flex",
    fontSize: "25px",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",

    flexDirection: "column",
    maxHeight: "50px",
    color: "white",
  },
  buttonFrame: {
    display: "flex",
    fontSize: "20px",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",

    flexDirection: "column",
    maxHeight: "50px",
  },
};

export default class TopWallet extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          <p>Available Balance</p>
        </div>
        <div style={styles.balance}>
          <p>Rp890,000</p>
        </div>
        <div style={styles.buttonFrame}>
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              width: "100px",
              height: "23px",
              fontWeight: "bold",
              borderRadius: "5px",
              outline: "none",
              cursor: "pointer",
              color: "#FF3737",
            }}
          >
            penarikan
          </button>
        </div>
      </div>
    );
  }
}
