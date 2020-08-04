import React, { Component } from "react";
import Appbar from "../../components/app-bar";
import { Container, Card } from "@material-ui/core";
import ImgCod from "../../assets/cod.svg";
import ImgArrow from "../../assets/arrow.svg";
import ImgBni from "../../assets/bni.png";
import ImgBca from "../../assets/bca.png";
import ImgMandiri from "../../assets/mandiri.png";
import ImgBri from "../../assets/bri.png";

const styles = {
  container: {
    backgroundColor: "#FBFBFB",
    height: "100vh",
    display: "flex",
    padding: "0",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default class MetodePembayaran extends Component {
  handleBniMethod = () => {
    alert("hello world");
  };

  render() {
    return (
      <React.Fragment>
        <Appbar title="Pilih Metode Pembayaran" />
        <Container style={styles.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                backgroundColor: "white",
                height: "140px",
              }}
            >
              <p style={{ fontSize: "10px" }}>Total Perlu Di Bayar</p>
              <p style={{ fontSize: "30px", marginTop: "-2px" }}>Rp155,000</p>
            </div>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                backgroundColor: "white",
                height: "460px",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "90%",
                  boxShadow: "0px 0px 2px 0px gray",
                  borderRadius: "5px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly ",
                    alignItems: "center",
                    // backgroundColor: "red",
                    width: "70%",
                  }}
                >
                  <img src={ImgCod} style={{ width: "40px" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ fontSize: "15px" }}>Bayar Di Tempat</p>
                    <p
                      style={{
                        fontSize: "11px",
                        marginTop: "-10px",
                        color: "gray",
                      }}
                    >
                      Siapkan Uang Pas
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    height: "100%",
                    width: "10%",
                  }}
                >
                  <img src={ImgArrow} style={{ width: "15px" }} />
                </div>
              </Card>
              <br />

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  // backgroundColor: "red",
                  width: "90%",
                  alignItems: "center",
                  // flexDirection:""
                }}
              >
                <p>Transfer Bank</p>
              </div>
              {/* <br /> */}
              <Card
                onClick={this.handleBniMethod}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "90%",
                  boxShadow: "0px 0px 2px 0px gray",
                  borderRadius: "5px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly ",
                    alignItems: "center",
                    // backgroundColor: "red",
                    width: "70%",
                  }}
                >
                  <img src={ImgBni} style={{ width: "50px" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ fontSize: "15px" }}>Transfer Bank BNI</p>
                    <p
                      style={{
                        fontSize: "11px",
                        marginTop: "-10px",
                        color: "gray",
                      }}
                    >
                      Transfer Ke Bank BNI
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    height: "100%",
                    width: "10%",
                  }}
                >
                  <img src={ImgArrow} style={{ width: "15px" }} />
                </div>
              </Card>
              <br />
              <Card
                onClick={this.handleBniMethod}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "90%",
                  boxShadow: "0px 0px 2px 0px gray",
                  borderRadius: "5px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly ",
                    alignItems: "center",
                    // backgroundColor: "red",
                    width: "70%",
                  }}
                >
                  <img src={ImgBca} style={{ width: "50px" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ fontSize: "15px" }}>Transfer Bank BCA</p>
                    <p
                      style={{
                        fontSize: "11px",
                        marginTop: "-10px",
                        color: "gray",
                      }}
                    >
                      Transfer Ke Bank BCA
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    height: "100%",
                    width: "10%",
                  }}
                >
                  <img src={ImgArrow} style={{ width: "15px" }} />
                </div>
              </Card>
              <br />
              <Card
                onClick={this.handleBniMethod}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "90%",
                  boxShadow: "0px 0px 2px 0px gray",
                  borderRadius: "5px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly ",
                    alignItems: "center",
                    // backgroundColor: "red",
                    width: "70%",
                  }}
                >
                  <img src={ImgMandiri} style={{ width: "50px" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ fontSize: "13px" }}>Transfer Bank Mandiri</p>
                    <p
                      style={{
                        fontSize: "11px",
                        marginTop: "-10px",
                        color: "gray",
                      }}
                    >
                      Transfer Ke Bank Mandiri
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    height: "100%",
                    width: "10%",
                  }}
                >
                  <img src={ImgArrow} style={{ width: "15px" }} />
                </div>
              </Card>
              <br />
              <Card
                onClick={this.handleBniMethod}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  width: "90%",
                  boxShadow: "0px 0px 2px 0px gray",
                  borderRadius: "5px",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly ",
                    alignItems: "center",
                    // backgroundColor: "red",
                    width: "70%",
                  }}
                >
                  <img src={ImgBri} style={{ width: "40px" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ fontSize: "15px" }}>Transfer Bank BRI</p>
                    <p
                      style={{
                        fontSize: "11px",
                        marginTop: "-10px",
                        color: "gray",
                      }}
                    >
                      Transfer Ke Bank BRI
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                    height: "100%",
                    width: "10%",
                  }}
                >
                  <img src={ImgArrow} style={{ width: "15px" }} />
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
