import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import AppBar from "../../components/app-bar";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { withRouter } from "react-router-dom";

const styles = {
  container: {
    backgroundColor: "#FBFBFB",
    height: "100vh",
    display: "flex",
    // alignItems:"center"
    // justifyContent: "center",
    padding: "0",
    alignItems: "center",
    flexDirection: "column",
  },
  select: {
    // width: "10%",
    // margin: "10px",
    backgroundColor: "white",
    border: "0",
  },
  optionFrame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderWidth: "1px",
    // borderColor: "gray",
    borderStyle: "ridge",
    // padding: "0",
  },
  addressDetail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    // flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderWidth: "1px",
    // borderColor: "gray",
    // backgroundColor: "red",
    borderStyle: "ridge",
    height: "80px",
    // padding: "0",
  },
};

const kecamatan = [{ nama: "ngaliyan" }, { nama: "mijen" }, { nama: "tugu" }];

const kelurahan = [
  {
    kecamatan: "ngaliyan",
    data: [{ nama: "gondoriyo" }, { nama: "new york" }],
  },
  {
    kecamatan: "mijen",
    data: [{ nama: "paris" }, { nama: "oregon" }],
  },
  {
    kecamatan: "tugu",
    data: [{ nama: "los angles" }, { nama: "leo" }],
  },
];

class PilihLokasi extends Component {
  state = {
    kecTerpilih: "",
    databases: [],
    destination: "",
  };

  componentWillMount() {
    const destination = sessionStorage.getItem("destination");
    this.setState({
      destination: destination,
    });
  }

  handleChangeOption = (e) => {
    console.log(e.target.value);
    this.setState({
      kecTerpilih: e.target.value,
    });
    const finding = kelurahan.find((i) => i.kecamatan === e.target.value);
    console.log(finding);
    this.setState({
      databases: finding.data,
    });
  };

  handleSubmit = () => {
    this.props.history.push(`/order-detail/${this.state.destination}`);
  };

  render() {
    return (
      <React.Fragment>
        <AppBar title="Pilih Lokasi" />
        <Container style={styles.container} component="main" maxWidth="xs">
          <div
            style={{
              marginTop: "50px",
              display: "flex",
              // justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              flexDirection: "column",
              // height: "400px",
              // backgroundColor: "red",
            }}
          >
            {/* <p>Pilih Kota</p> */}
            <div style={styles.optionFrame}>
              <div
                style={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <p>Kota</p>
                <select style={styles.select}>
                  <option disabled default>
                    Provinsi
                  </option>
                  <option>Jawa Tengah</option>
                  {/* <option>Kendal</option> */}
                </select>
              </div>
            </div>
            <div style={styles.optionFrame}>
              <div
                style={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <p>Kota</p>
                <select style={styles.select}>
                  <option disabled default>
                    Pilih Kota
                  </option>
                  <option>Semarang</option>
                  <option>Kendal</option>
                </select>
              </div>
            </div>
            <div style={styles.optionFrame}>
              <div
                style={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <p>Kecamatan</p>
                <select
                  style={styles.select}
                  onChange={this.handleChangeOption}
                >
                  {kecamatan.map((i) => {
                    return <option>{i.nama}</option>;
                  })}
                </select>
              </div>
            </div>
            <div style={styles.optionFrame}>
              <div
                style={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <p>kelurahan</p>
                <select style={styles.select}>
                  {this.state.databases.map((i) => {
                    return <option>{i.nama}</option>;
                  })}
                </select>
              </div>
            </div>
            <div style={styles.addressDetail}>
              <div
                style={{
                  width: "95%",
                  // backgroundColor: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  // padding: "0",
                  flexDirection: "column",
                }}
              >
                {" "}
                <p>Detail Alamat</p>
                <input
                  style={{ width: "95%", border: "none", outline: "none" }}
                  placeholder="Nama Gedung, Jalan, Bangunan , RT & RW , No.Jalan"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                // backgroundColor: "red",
                position: "fixed",
                height: "60px",
                bottom: "0",
                maxWidth: "446px",
              }}
            >
              <Button
                style={{
                  width: "90%",
                  backgroundColor: "#FB0000",
                  color: "white",
                }}
                variant="contained"
                onClick={this.handleSubmit}
                // color="secondary"
              >
                PILIH LOKASI INI
              </Button>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(PilihLokasi);
