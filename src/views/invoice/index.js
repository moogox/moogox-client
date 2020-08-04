import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import AppBar from "../../components/app-bar";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { withRouter } from "react-router-dom";

const styles = {
  container: {
    backgroundColor: "#FBFBFB",
    // height: "100vh",
    display: "flex",
    // alignItems:"center"
    // justifyContent: "center",
    padding: "10px 0px 10px 0px",
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

class Invoice extends Component {
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
        <AppBar title="Detail Pesanan" />
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
                <p>No. Pesanan</p>
                <p>5HSJJALLS</p>
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
                <p>Pesanan Anda</p>
                <p>ISI BENSIN</p>
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
                <p>Ket. Pesanan</p>
                <p>PERTALITE 15 LITER</p>
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
                <p>Harga Total</p>
                <p>Rp140,000</p>
              </div>
            </div>
          </div>
          {/* hell */}
          <div
            style={{
              marginTop: "10px",
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
                <p>Ket. Kendaraan</p>
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
                <p>Tipe Kendaraan</p>
                <p>Mobil</p>
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
                <p>Merek</p>
                <p>Suzuki Ertiga GL 2015</p>
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
                <p>No. Polisi / PLAT</p>
                <p>H 1123 SN</p>
              </div>
            </div>
          </div>

          {/* hello2 */}

          <div
            style={{
              marginTop: "10px",
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
                <p>Identitas</p>
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
                <p>Atas Nama</p>
                <p>Bpk Talenta Maulana F</p>
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
                <p>No. Telp</p>
                <p>088233168920</p>
              </div>
            </div>
            <div style={styles.optionFrame}>
              <div
                style={{
                  width: "95%",
                  display: "flex",
                  justifyContent: "center",
                  minHeight: "120px",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "15px" }}>Alamat Pengantaran</p>
                <p style={{ fontSize: "12px" }}>
                  Perum Graha Bringin Mas Jalan Selatan Dalam 1 No 31 , Kel
                  Gondoriyo , Kec Ngaliyan , Kota Semarang Provinsi Jawa Tengah
                  ,50187
                </p>
              </div>
            </div>
          </div>
          {/* hello3 */}

          <div
            style={{
              marginTop: "10px",
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
                <p style={{ fontSize: "12px" }}>Status Pesanan</p>
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
                <p style={{ fontSize: "11px" }}>12-10-2020 , 12:00 WIB</p>
                <p style={{ fontSize: "11px", textAlign: "right" }}>
                  Pesanan Di Buat [ MENUNGGU PEMBAYARAN UNTUK DI LAKUKAN
                  PEMROSESAN ]
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              // backgroundColor: "red",
              // position: "fixed",
              height: "60px",
              // bottom: "0",
              maxWidth: "446px",
              minHeight: "100px",
            }}
          >
            <Button
              style={{
                width: "90%",
                backgroundColor: "#FB0000",
                color: "white",
              }}
              variant="contained"

              // color="secondary"
            >
              RINCIAN PEMBAYARAN
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Invoice);
