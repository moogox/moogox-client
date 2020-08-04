import React, { Component } from "react";
import Appbar from "../../../components/app-bar";
import { Container, Button, Checkbox } from "@material-ui/core";
import ImgPin from "../../../assets/map.svg";
import { withRouter } from "react-router-dom";
import OrderDetailCard from "../../../components/order-detail-card";

const styles = {
  container: {
    backgroundColor: "#FBFBFB",
    // height: "100vh",
    display: "flex",
    padding: "0",
    alignItems: "center",
    flexDirection: "column",
  },
  identitas: {
    display: "flex",
    marginTop: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    height: "320px",
  },
  identitasInput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  subBody: {
    marginTop: "50px",
    display: "flex",

    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  },
  identitasTitleBody: {
    display: "flex",
    justifyContent: "flex-start ",
    alignItems: "center",
    width: "95%",
  },
  identitasFrame: {
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  input: {
    width: "99%",
    border: "none",
    outline: "none",
    backgroundColor: "#F5F5F5",
    height: "40px",
    borderRadius: "4px",
  },
  kendaraan: {
    display: "flex",
    marginTop: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    height: "380px",
  },
  kendaraanTitleBody: {
    display: "flex",
    justifyContent: "flex-start ",
    alignItems: "center",
    width: "95%",
  },
  pesanan: {
    display: "flex",
    marginTop: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    height: "170px",
    marginTop: "10px",
  },
  fuelInput: {
    width: "50%",
    border: "none",
    outline: "none",
    backgroundColor: "#F5F5F5",
    height: "40px",
    // borderRadius: "4px",
  },
  voucher: {
    display: "flex",
    marginTop: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    height: "120px",
    marginTop: "10px",
  },
  tableFrame: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderBottomWidth: "1px",
    // borderColor: "gray",
    borderBottomStyle: "ridge",
    // padding: "0",
  },
  pembayaran: {
    display: "flex",
    marginTop: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    height: "280px",
    marginTop: "10px",
  },
};

class SparepartOrderDetail extends Component {
  state = {
    checked: false,
    setChecked: false,
    liter: "",
    rupiah: "",
  };

  handleSubmit = () => {
    this.props.history.push("/pilih-metode-pembayaran");
  };
  handleChange = (event) => {
    switch (this.state.checked) {
      case true:
        this.setState({
          checked: false,
        });
        break;

      default:
        this.setState({
          checked: true,
        });
        break;
    }
  };

  handleChangeLiter = (event) => {
    var result = event.target.value * 7500;
    this.setState({
      liter: event.target.value,
      rupiah: result,
    });
  };
  handleChangeRupiah = (event) => {
    var result = event.target.value / 7500;
    this.setState({
      liter: result,
      rupiah: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Appbar title="Buat Pesanan" />
        <Container style={styles.container} component="main" maxWidth="xs">
          <div style={styles.subBody}>
            <div id="identitas" style={styles.identitas}>
              <div style={styles.identitasTitleBody}>
                <p>identitas</p>
              </div>
              <div style={styles.identitasInput}>
                <div style={styles.identitasFrame}>
                  {" "}
                  <p style={{ fontSize: "13px" }}>Atas Nama</p>
                  <input
                    style={styles.input}
                    placeholder="Pemilik Kendaraan..."
                  />
                </div>
              </div>
              <div style={styles.identitasInput}>
                <div style={styles.identitasFrame}>
                  {" "}
                  <p style={{ fontSize: "13px" }}>No Telp</p>
                  <input
                    style={styles.input}
                    placeholder="No Telp Yang Dapat Di Hubungi"
                  />
                </div>
              </div>
              <div style={styles.identitasInput}>
                <div
                  style={{
                    width: "95%",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",

                    flexDirection: "column",
                  }}
                >
                  {" "}
                  <p style={{ fontSize: "13px" }}>Alamat</p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flexDirection: "row",
                      // backgroundColor: "blue",
                      width: "100%",
                      marginTop: "-10px",
                    }}
                  >
                    <img src={ImgPin} style={{ width: "16px" }} />
                    <div style={{ width: "75%" }}>
                      <p style={{ fontSize: "10px" }}>
                        Perum Graha Bringin Mas Jalan Selatan Dalam 1 No 31 ,
                        Kel Gondoriyo , Kec Ngaliyan , Kota Semarang
                      </p>
                    </div>
                    <button
                      style={{
                        // backgroundColor: "",
                        background: "none",
                        border: "none",
                        color: "#FB0000",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      ganti
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <OrderDetailCard />
            <OrderDetailCard />
            <div id="voucher" style={styles.voucher}>
              <div style={styles.kendaraanTitleBody}>
                <p>Kode Voucher</p>
              </div>
              <div style={styles.identitasInput}>
                <div style={styles.identitasFrame}>
                  {" "}
                  <input
                    style={styles.input}
                    placeholder="Masukan Kode Voucher / Promo"
                  />
                </div>
              </div>
            </div>
            <div id="voucher" style={styles.pembayaran}>
              <div style={styles.kendaraanTitleBody}>
                <p>Detail Pembayaran</p>
              </div>
              <div style={styles.tableFrame}>
                <div
                  style={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <p>2x Tromol Trusty</p>
                  <p>Rp120,000</p>
                </div>
              </div>
              <div style={styles.tableFrame}>
                <div
                  style={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <p>Biaya Pemasangan</p>
                  <p>Rp20,000</p>
                </div>
              </div>
              <div style={styles.tableFrame}>
                <div
                  style={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <p>Promo</p>
                  <p>Rp100,000</p>
                </div>
              </div>
              <div style={styles.tableFrame}>
                <div
                  style={{
                    width: "95%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <p>Total Pembayaran</p>
                  <p>Rp150,000</p>
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
                minHeight: "150px",
              }}
            >
              <Button
                style={{
                  width: "90%",
                  backgroundColor: "#FB0000",
                  color: "white",
                }}
                variant="contained"
                F
                onClick={this.handleSubmit}
                // color="secondary"
              >
                PILIH METODE PEMBAYARAN
              </Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "red",
                  width: "90%",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "11px" }}>
                  Dengan Memesan Kami Anggap Anda Setuju Dengan Syarat &
                  Ketentuan Pemesanan Tambal Ban Di Moogox.id
                </p>
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(SparepartOrderDetail);
