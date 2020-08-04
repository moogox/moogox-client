import React, { Component } from "react";
import AirportShuttle from "@material-ui/icons/AirportShuttle";
import Build from "@material-ui/icons/Build";
import { Card } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "97%",
    backgroundColor: "white",
    flexDirection: "row",
    height: "130px",
    margin: "3px 0px 3px 0px",
    borderBottomWidth: "1px",
    // borderColor: "gray",
    // backgroundColor: "red",
    borderBottomStyle: "ridge",
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
  buttonFrame: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontSize: "10px",
    width: "90%",
    // backgroundColor: "yellow",
  },
  secondLayer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
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

export default class CartCard extends Component {
  render() {
    return (
      <Card style={style.container}>
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
          <div style={style.buttonFrame}>
            <div style={style.secondLayer}>
              <button
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  cursor: "pointer",
                  background: "none",
                  height: "30px",
                  border: "none",
                  outline: "none",
                }}
              >
                <Delete />
              </button>
              <button
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  cursor: "pointer",
                  height: "30px",
                  border: "none",
                  outline: "none",
                }}
              >
                +
              </button>
              <p>5</p>
              <button
                style={{
                  borderRadius: "50%",
                  width: "30px",
                  cursor: "pointer",
                  height: "30px",
                  border: "none",
                  outline: "none",
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}
