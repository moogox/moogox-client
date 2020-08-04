import React, { Component } from "react";
// import homeHeading from "../../components/homeheading/index";
import { Container, Icon } from "@material-ui/core";
import MainFeatures from "../../components/main-features/index";
import CommingSoonFeatures from "../../components/comming-soon-features";
import Carousel from "../../components/carousel";
import ImgWallet from "../../assets/dompet.svg";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";

import ImgVoucher from "../../assets/kupon.svg";

const style = {
  mainContainer: {
    width: "100%",
    padding: "0",
    display: "flex",
    // backgroundColor: "#F5F5F5",
    flexDirection: "column",
    alignItems: "center",
  },
  headingTop: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",

    backgroundColor: "#FF0202",
    width: "100%",
    height: "145px",
    color: "white",
  },
  walletAndVoucher: {
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    marginTop: "-40px",
    justifyContent: "space-evenly",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    width: "90%",
    height: "75px",
  },
};

export default class Home extends Component {
  state = {
    time: "",
  };

  componentWillMount() {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      this.setState({
        time: "pagi",
      });
    } else if (curHr < 18) {
      this.setState({
        time: "siang",
      });
    } else {
      this.setState({
        time: "malam",
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container style={style.mainContainer} component="main" maxWidth="xs">
          {/* heading top */}
          <div style={style.headingTop}>
            <Container
              style={{ width: "90%", padding: "10px", textAlign: "left" }}
            >
              <p>Selamat {this.state.time}</p>
              <p>Talenta Maulana F</p>
            </Container>
          </div>
          {/*end heading top */}

          {/* wallet and voucher component */}
          <div style={style.walletAndVoucher}>
            <CardActionArea
              onClick={() => this.props.history.push("/wallet")}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                // backgroundColor: "red",
                width: "50%",
                borderRightWidth: "1px",
                borderRightColor: "black",
                borderRightStyle: "ridge",
              }}
            >
              <img style={{ width: "20px" }} src={ImgWallet} />
              <p style={{ marginLeft: "3px" }}>Rp.120,000</p>
            </CardActionArea>
            <CardActionArea
              onClick={() => this.props.history.push("/vouchers")}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                // backgroundColor: "red",
                width: "50%",
              }}
            >
              <img style={{ width: "20px" }} src={ImgVoucher} />
              <p style={{ marginLeft: "3px" }}>4 Voucher</p>
            </CardActionArea>
          </div>
          {/* end wallet and voucher component */}
          <MainFeatures />
          <CommingSoonFeatures />
          <Carousel />
        </Container>
      </React.Fragment>
    );
  }
}
