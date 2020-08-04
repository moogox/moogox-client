import React, { Component } from "react";
import { StylesProvider } from "@material-ui/core";
import ImgOne from "../../assets/1.svg";
import ImgBni from "../../assets/bni.png";
import ImgThree from "../../assets/3.svg";
import ImgTwo from "../../assets/2.svg";

const styles = {
  container: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    // backgroundColor: "red",
    marginTop: "20px",
    minHeight: "300px",
  },
  step1: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "95%",
    flexDirection: "row",
  },
  step2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    height: "150px",
    width: "100%",
    // padding: "10px",
  },
  firstRowStep2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    maxHeight: "30px",
  },
  descriptionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    maxHeight: "30px",
    fontSize: "13px",
  },
};

export default class PaymentSteps extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.step1}>
          <img src={ImgOne} style={{ width: "12px" }} />
          <p style={{ fontSize: "10px", width: "90%", color: "#6D6D6D" }}>
            Gunakan ATM / ibangking / mBangking / Setor Tunai Untuk Transfer Ke
            Rekening Moogox.id Berikut Ini
          </p>
        </div>
        <div style={styles.step2}>
          <div style={styles.firstRowStep2}>
            <img src={ImgBni} style={{ width: "50px" }} />
            <p style={{ color: "#0CD17E" }}>salin</p>
          </div>
          <div style={styles.descriptionRow}>
            <p>No.rekening :</p>
            <p>0803997331</p>
          </div>
          <div style={styles.descriptionRow}>
            <p>Cabang :</p>
            <p>BNI New York , CA</p>
          </div>
          <div style={styles.descriptionRow}>
            <p>Atas Nama :</p>
            <p>Moogox, Inc</p>
          </div>
        </div>
        <div style={styles.step1}>
          <img src={ImgTwo} style={{ width: "12px" }} />
          <p style={{ fontSize: "10px", width: "90%", color: "#6D6D6D" }}>
            Silahkan Upload Bukti Transfer Sebelum 24-05-2020
          </p>
        </div>
        <div style={styles.step1}>
          <img src={ImgThree} style={{ width: "12px" }} />
          <p style={{ fontSize: "10px", width: "90%", color: "#6D6D6D" }}>
            Demi Keamanan Transaksi, Mohon Untuk Tidak Membagikan Bukti Atau
            Konfirmasi Pembayaran Pesanan Kepada Siapapun , Selain Mengunggahnya
            Di Website Moogox.id
          </p>
        </div>
      </div>
    );
  }
}
