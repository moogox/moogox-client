import React, { Component } from "react";
import { Card, Button } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    width: "90%",
    margin: "10px 0px 10px 0px",
  },
  actionFrame: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    // backgroundColor: "white",
  },
};

export default class VoucherCard extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <img
          style={{ width: "100%" }}
          src="https://ecs7.tokopedia.net/img/blog/promo/2020/07/Catalog-Detail-Banner_Lite-640x213-copy-6.jpg"
        />
        <div style={styles.actionFrame}>
          <p>Kode : DKJS88299SJ</p>
          <Button>salin</Button>
        </div>
      </Card>
    );
  }
}
