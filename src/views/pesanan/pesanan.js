import React, { Component } from "react";
import { Container } from "@material-ui/core";
import MainAppBar from "../../components/main-app-bar";
import OrderCard from "../../components/order-card";
import Axios from "axios";

const styles = {
  container: {
    width: "100%",
    padding: "0",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    // backgroundColor:"whit"
    alignItems: "center",
    marginTop: "60px",
  },
};

export default class Pesanan extends Component {
  state = {
    orders: [],
    loading: false,
  };
  componentWillMount() {
    this.setState({ loading: true });
    const userFromSession = JSON.parse(sessionStorage.getItem("user"));

    Axios({
      method: "POST",
      url: "https://moogox-service.herokuapp.com/api/transactions/order/list",
      headers: { "Content-Type": "application/json" },
      data: {
        userId: userFromSession._id,
      },
    })
      .then((res) => {
        this.setState({
          loading: false,
          orders: res.data.orderResult,
        });
      })
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <MainAppBar title="Pesanan" />
        <Container style={styles.container} component="main" maxWidth="xs">
          {this.state.loading && <p>loading</p>}
          {!this.state.loading &&
            this.state.orders.map((i) => {
              return (
                <OrderCard
                  orderType={i.orderType}
                  date={i.date}
                  orderDescription={i.orderDescription}
                  address={i.address}
                  vehicleType={i.vehicleType}
                  merk={i.merk}
                  status={i.status}
                />
              );
            })}
        </Container>
      </React.Fragment>
    );
  }
}
