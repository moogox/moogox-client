import React, { Component } from "react";
import { Card } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    // backgroundColor: "red",
    maxHeight: "200px",
    margin: "5px 0px 5px 0px",
    alignItems: "center",
    flexDirection: "column",
  },
  orderTypeAndDate: {
    fontSize: "14px",
    display: "flex",
    width: "95%",
    // backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "40px",
    flexDirection: "row",
  },
  image: {
    maxWidth: "60px",
  },
  Description: {
    display: "flex",
    width: "95%",
    // backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center",
    // maxHeight: "30px",
    flexDirection: "row",
  },
  descriptionTxt: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  addressTxt: {
    fontSize: "14px",
    textAlign: "right",
  },
  VechileTypeAndStatus: {
    fontSize: "14px",
    display: "flex",
    width: "95%",
    // backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "50px",
    flexDirection: "row",
  },
};

export default class OrderCard extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <div style={styles.orderTypeAndDate}>
          <p>{this.props.orderType}</p>
          <p>{this.props.date}</p>
        </div>
        <div style={styles.Description}>
          <img
            style={styles.image}
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-3246347/x---break_x-break-model-trusty-set-tromol-depan-dan-belakang-for-klx-150_full08.jpg"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              width: "80%",
            }}
          >
            <p style={styles.descriptionTxt}>{this.props.orderDescription}</p>
            <p style={styles.addressTxt}>{this.props.address}</p>
          </div>
        </div>
        <div style={styles.VechileTypeAndStatus}>
          <p>
            {this.props.vehicleType} - {this.props.merk}
          </p>
          <p>{this.props.status}</p>
        </div>
      </Card>
    );
  }
}
