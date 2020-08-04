import React, { Component } from "react";
import AirportShuttle from "@material-ui/icons/AirportShuttle";
import Build from "@material-ui/icons/Build";
import { Card, Checkbox } from "@material-ui/core";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "97%",
    backgroundColor: "white",
    flexDirection: "row",
    // height: "200px",
    borderBottomWidth: "1px",
    // borderColor: "gray",
    // backgroundColor: "red",
    borderBottomStyle: "ridge",
    margin: "3px 0px 3px 0px",
    padding: "10px 0px 10px 0px",
    // borderBottomColor: "gray",
  },
  imageBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  descriptionBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    flexDirection: "column",
    // backgroundColor: "red",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "13px",
    fontWeight: "bold",
    maxHeight: "30px",
    width: "100%",
    // backgroundColor: "blue",
  },
  Price: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "14px",
    maxHeight: "40px",
    width: "100%",
    // backgroundColor: "blue",
  },
  end: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "10px",
    width: "100%",
    // backgroundColor: "yellow",
  },
  secondLayer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    // backgroundColor: "green",
  },
  ongkir: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80px",
    // backgroundColor: "red",
  },
  installment: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red",
    width: "125px",
  },
  image: {
    width: "100%",
    display: "flex",
  },
};

const installmentInput = (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      //   backgroundColor: "red",
      fontSize: "10px",
      width: "90%",
      height: "120px",
      flexDirection: "column",
    }}
  >
    <p>Tipe Kendaraan</p>
    <input placeholder="Tipe Kendaraan" />
    <p>Merek</p>
    <input placeholder="Tipe Kendaraan" />
  </div>
);

export default class OrderDetailCard extends Component {
  state = {
    checked: false,
    setChecked: true,
  };

  handleChange = (e) => {
    if (this.state.checked === true) {
      this.setState({
        checked: false,
      });
    } else {
      this.setState({
        checked: true,
      });
    }
  };

  render() {
    return (
      <Card style={style.container} onClick={this.props.handleClick}>
        <div style={style.imageBody}>
          <img
            style={style.image}
            src="https://www.belipart.com/images/thumbnails/858/750/detailed/12/tromol-depan-alumunium-vario-110-putih-tdr-10651-10651_u0bn-yy.jpg"
          />
        </div>
        <div style={style.descriptionBody}>
          <div style={style.title}>
            <p>2X Tromol Motor Trusty TDR - Honda Beat 2010</p>
          </div>
          <div style={style.Price}>
            <p>Rp109,000</p>
          </div>
          <div style={style.end}>
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
            />
            <p style={{ fontSize: "12px" }}>sekalian pasang</p>
          </div>
          {this.state.checked ? installmentInput : ""}
          <div style={style.end}></div>
        </div>
      </Card>
    );
  }
}
