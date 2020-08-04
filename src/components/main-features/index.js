import React, { Component } from "react";
import imgFuel from "../../assets/fuel.svg";
import imgTires from "../../assets/car.svg";
import imgCart from "../../assets/keranjang.svg";
import { Card } from "@material-ui/core";
import { withRouter } from "react-router-dom";
const style = {
  fiturBar: {
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "140px",
    fontSize: "11px",
    color: "gray",
  },
  fiturBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

class MainFeatures extends Component {
  handleClickFuel = () => {
    this.props.history.push("/pilih-lokasi");
    sessionStorage.setItem("destination", "fuel");
  };

  handleClickTires = () => {
    this.props.history.push("/pilih-lokasi");
    sessionStorage.setItem("destination", "tires");
  };

  handleClickSparepart = () => {
    this.props.history.push("/sparepart");
  };

  render() {
    return (
      <div style={style.fiturBar}>
        <div style={style.fiturBody}>
          <Card
            onClick={this.handleClickFuel}
            style={{
              backgroundColor: "#FFF1F0",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              height: "45px",
            }}
          >
            <img src={imgFuel} style={{ width: "20px" }} />
          </Card>
          <p>Isi Bensin</p>
        </div>
        <div style={style.fiturBody}>
          <Card
            onClick={this.handleClickTires}
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
          </Card>
          <p>Tambal Ban</p>
        </div>
        <div style={style.fiturBody}>
          <Card
            onClick={this.handleClickSparepart}
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
          </Card>
          <p>Beli & Ganti</p>
        </div>
        <div style={style.fiturBody}>
          <div
            style={{
              backgroundColor: "#FFF1F0",
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              height: "45px",
            }}
          >
            <img src={imgFuel} style={{ width: "20px" }} />
          </div>
          <p>Konsultasi</p>
        </div>
      </div>
    );
  }
}

export default withRouter(MainFeatures);
