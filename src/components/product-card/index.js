import React, { Component } from "react";
import AirportShuttle from "@material-ui/icons/AirportShuttle";
import Build from "@material-ui/icons/Build";
import { Card } from "@material-ui/core";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "97%",
    backgroundColor: "white",
    flexDirection: "row",
    height: "130px",
    borderBottomWidth: "1px",
    // borderColor: "gray",
    // backgroundColor: "red",
    borderBottomStyle: "ridge",
    margin: "3px 0px 3px 0px",
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
  DeliveryFeeAndInstalment: {
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

export default class ProductCard extends Component {
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
            <p>Tromol Motor Trusty TDR - Honda Beat 2010</p>
          </div>
          <div style={style.Price}>
            <p>Rp109,000</p>
          </div>
          <div style={style.DeliveryFeeAndInstalment}>
            <div style={style.secondLayer}>
              <div style={style.ongkir}>
                <AirportShuttle color="secondary" style={{ width: "20px" }} />
                <p>Free Ongkir</p>
              </div>
              <div style={style.installment}>
                <Build color="secondary" style={{ width: "20px" }} />
                <p>Melayani Pemasangan</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
