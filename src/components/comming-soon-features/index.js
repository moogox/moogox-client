import React, { Component } from "react";
import imgFuel from "../../assets/fuel.svg";
import imgTires from "../../assets/car.svg";
import imgCart from "../../assets/keranjang.svg";
const style = {
  fiturBar: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    fontSize: "11px",
    color: "gray",
  },
  container: {
    marginTop: "15px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "170px",
  },
  fiturBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default class CommingSoonFeatures extends Component {
  render() {
    return (
      <div style={style.container}>
        <div
          style={{
            backgroundColor: "#FFD600",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            maxHeight: "25px",
            color: "white",
          }}
        >
          <h5>Segera Hadir</h5>
        </div>
        <div style={style.fiturBar}>
          <div style={style.fiturBody}>
            <div
              style={{
                backgroundColor: "#FFF1F0",
                width: "62%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                height: "45px",
              }}
            >
              <img src={imgFuel} style={{ width: "20px" }} />
            </div>
            <p>Service Berkala</p>
          </div>
          <div style={style.fiturBody}>
            <div
              style={{
                backgroundColor: "#FFF1F0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                height: "45px",
                maxWidth: "45px",
              }}
            >
              <img src={imgTires} style={{ width: "25px" }} />
            </div>
            <p>Emergency</p>
          </div>
          <div style={style.fiturBody}>
            <div
              style={{
                backgroundColor: "#FFF1F0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                height: "45px",
                maxWidth: "45px",
              }}
            >
              <img src={imgCart} style={{ width: "25px" }} />
            </div>
            <p>Service Umum</p>
          </div>
        </div>
      </div>
    );
  }
}
