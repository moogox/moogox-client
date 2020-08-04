import React, { Component } from "react";

const styles = {
  container: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    height: "",
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "90%",
    height: "180px",
    // backgroundColor: "blue",
  },
  notice: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 245, 0, 0.29)",
    marginTop: "-20px",
    width: "100%",
    borderRadius: "3px",
    maxHeight: "24px",
  },
};

export default class TotalPembyaran extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              flexDirection: "column",
              // backgroundColor: "red",
            }}
          >
            <p style={{ fontSize: "11px", color: "black" }}>
              Total Pembayaran :
            </p>
            <p
              style={{ fontSize: "30px", color: "#FF0202", marginTop: "-2px" }}
            >
              Rp155,303
            </p>
          </div>
          <div style={styles.notice}>
            <p style={{ fontSize: "11px", color: "#FF9029" }}>
              Bayar Pesanan Sesuai Jumlah Di Atas
            </p>
          </div>
          <div style={{ width: "95%", display: "flex", marginTop: "5px" }}>
            <p style={{ color: "#6D6D6D", fontSize: "10px" }}>
              Dicek 24 Jam Setelah Bukti Transfer Di Upload , Di wajibkan Untuk
              Membayar Sesuai Total Pembayaran (termasuk kode unik) Sebelum
              Batas Waktu Berakhir
            </p>
          </div>
        </div>
      </div>
    );
  }
}
