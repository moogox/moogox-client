import React, { Component } from "react";
import SparepartAppBar from "../../components/sparepart-app-bar";
import { Container } from "@material-ui/core";
import ProductCard from "../../components/product-card";
import { withRouter } from "react-router-dom";

const style = {
  mainContainer: {
    width: "100%",
    padding: "0",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    // backgroundColor:"whit"
    alignItems: "center",
  },
  body: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "80px",
    width: "100%",
  },
};

class Seacrh extends Component {
  state = {
    product: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
  };

  render() {
    return (
      <Container style={style.mainContainer} component="main" maxWidth="xs">
        <SparepartAppBar />
        <div style={style.body}>
          {this.state.product.map((i) => {
            return (
              <ProductCard
                handleClick={() => this.props.history.push(`/product/${i.id}`)}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}

export default withRouter(Seacrh);
