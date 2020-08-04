import React, { Component, Fragment } from "react";
import Appbar from "../../components/app-bar";
import { Container, Button } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

const styles = {
  container: {
    backgroundColor: "",
    // height: "100vh",
    display: "flex",
    padding: "0",
    alignItems: "center",
    flexDirection: "column",
  },
  subContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    marginTop: "50px",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    minHeight: "120px",
    backgroundColor: "white",
  },
  TitleField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    flexDirection: "column",
  },
  formField: {
    display: "flex",
    marginTop: "8px",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    minHeight: "400px",
  },
  titleForm: {
    display: "flex",
    justifyContent: "flex-start ",
    alignItems: "center",
    width: "95%",
  },
  inputFrame: {
    width: "95%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  inputBody: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  input: {
    width: "99%",
    border: "none",
    outline: "none",
    backgroundColor: "#F5F5F5",
    height: "40px",
    borderRadius: "4px",
  },
};

export default class Withdrawal extends Component {
  render() {
    return (
      <Fragment>
        <Appbar title="Konfirmasi Pembayaran" />
        <Container style={styles.container}>
          <div style={styles.subContainer}>
            <div style={styles.title}>
              <div style={styles.TitleField}>
                <p style={{ fontSize: "11px", color: "black" }}>Saldo Saya :</p>
                <p
                  style={{
                    fontSize: "30px",
                    color: "#FF0202",
                    marginTop: "-2px",
                  }}
                >
                  Rp155,303
                </p>
              </div>
            </div>
            <div id="identitas" style={styles.formField}>
              <div style={styles.inputBody}>
                <div style={styles.inputFrame}>
                  {" "}
                  <p style={{ fontSize: "13px" }}>Atas Nama</p>
                  <input
                    style={styles.input}
                    placeholder="Nama Pemilik Rekening / Atas Nama"
                  />
                </div>
              </div>

              <div style={styles.inputBody}>
                <div style={styles.inputFrame}>
                  {" "}
                  <p style={{ fontSize: "13px" }}>Nama Bank</p>
                  <select style={styles.input}>
                    <option>BNI</option>
                    <option>BCA</option>
                    <option>BRI</option>
                    <option>Mandiri</option>
                    <option>BTN</option>
                    <option>Bank Lainya</option>
                  </select>
                </div>
              </div>
              <div style={styles.inputBody}>
                <div style={styles.inputFrame}>
                  {" "}
                  <p style={{ fontSize: "13px" }}>No. Rekening</p>
                  <input style={styles.input} placeholder="No.Rekening Anda" />
                </div>
              </div>

              <div style={styles.inputBody}>
                <div style={styles.inputFrame}>
                  {" "}
                  <p style={{ fontSize: "13px" }}>Jumlah Penarikan</p>
                  <input
                    disabled
                    style={styles.input}
                    placeholder="Saldo Saya Rp155.303"
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundColor: "white",
                // position: "fixed",
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
                KONFIRMASI
              </Button>
            </div>
          </div>
        </Container>
      </Fragment>
    );
  }
}
