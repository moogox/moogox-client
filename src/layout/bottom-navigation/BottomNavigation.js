import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ImgHome from "../../assets/home.svg";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import ImgOrder from "../../assets/pesanan.svg";
import ImgHelp from "../../assets/help.svg";
import ImgAccount from "../../assets/account.svg";

const styles = {
  root: {},
  stickToBottom: {
    width: "100%",
    maxWidth: 446,
    position: "fixed",
    bottom: 0,
    border: "0px solid #e0e0e0",
    boxShadow: "0px 0px 2px #9e9e9e",
  },
  root: {
    color: "#a3a3a3",
    fill: "#a3a3a3",
    "&$selected": {
      color: "#red",
      fill: "#red",
    },
  },
  selected: {},
};

class BottomNavigationApp extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    let value = 0;
    switch (this.props.location.pathname) {
      case "/":
        value = 0;
        break;
      case "/orders":
        value = 1;
        break;
      case "/help":
        value = 2;
        break;
      case "/profile":
        value = 3;
        break;
      default:
        value = 0;
    }
    this.setState({ value: value });
  }

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0:
        this.props.history.push("/");
        return;
      case 1:
        this.props.history.push("/pesanan");
        return;
      case 2:
        this.props.history.push("/bantuan");
        return;
      case 3:
        this.props.history.push("/akun");
        return;
      default:
        return;
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const actionClasses = this.props.classes;

    return (
      <BottomNavigation
        style={styles.stickToBottom}
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction
          classes={actionClasses}
          icon={<img src={ImgHome} style={{ width: "18px", height: "20px" }} />}
          label={<b style={{ fontSize: 11 }}>Home</b>}
        />
        <BottomNavigationAction
          classes={actionClasses}
          icon={
            <img src={ImgOrder} style={{ width: "18px", height: "20px" }} />
          }
          label={<b style={{ fontSize: 11 }}>Pesanan</b>}
        />
        <BottomNavigationAction
          classes={actionClasses}
          icon={<img src={ImgHelp} style={{ width: "18px", height: "20px" }} />}
          label={<b style={{ fontSize: 11 }}>Bantuan</b>}
        />
        <BottomNavigationAction
          classes={actionClasses}
          icon={
            <img src={ImgAccount} style={{ width: "18px", height: "20px" }} />
          }
          label={<b style={{ fontSize: 11 }}>Akun</b>}
        />
      </BottomNavigation>
    );
  }
}

BottomNavigationApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(BottomNavigationApp);
