import React, { Component, Suspense, lazy } from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import BottomNavigation from "./bottom-navigation/BottomNavigation";
import { Container } from "@material-ui/core";
import MetodePembayaran from "../views/metode-pembayaran";
import PaymentConfirm from "../views/payment-confirm";
import ForgotPasswordRequest from "../views/forgot-password-request";

// import homeHeading from "../components/homeheading/index";

const Invoice = lazy(() => import("../views/invoice"));
const tambalBan = lazy(() => import("../views/order-detail/tambal-ban"));
const ProductDetail = lazy(() => import("../views/product-detail"));
const Cart = lazy(() => import("../views/cart"));
const Seacrh = lazy(() => import("../views/search"));

const Home = lazy(() => import("../views/Home/Home"));
const SparepartOrderDetail = lazy(() =>
  import("../views/order-detail/sparepart")
);
const Login = lazy(() => import("../views/login/Login"));
const Pesanan = lazy(() => import("../views/pesanan/pesanan"));
const Bantuan = lazy(() => import("../views/bantuan/bantuan"));
const Akun = lazy(() => import("../views/akun/akun"));
const PilihLokasi = lazy(() => import("../views/pilih-lokasi/PilihLokasi"));
const FuelOrderDetail = lazy(() => import("../views/order-detail/bensin"));
const DetailPembayaran = lazy(() => import("../views/detail-pembayaran"));
const Voucher = lazy(() => import("../views/voucher"));
const Wallet = lazy(() => import("../views/wallet"));
const Withdrawal = lazy(() => import("../views/withdrawal"));

const style = {
  container: {
    backgroundColor: "#F5F5F5",
    height: "",
    display: "flex",
    justifyContent: "center",
    padding: "0",
    minHeight: "100vh",
  },
};

const homeRoute = ["/home", "/pesanan", "/bantuan", "/akun"];

class Layout extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs" style={style.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route path="/pesanan" component={Pesanan} />
              <Route path="/bantuan" component={Bantuan} />
              <Route path="/pilih-lokasi" component={PilihLokasi} />
              <Route path="/payment-confirm" component={PaymentConfirm} />
              <Route path="/order-detail/fuel" component={FuelOrderDetail} />
              <Route path="/detail-pembayaran" component={DetailPembayaran} />
              <Route path="/order-detail/tires" component={tambalBan} />
              <Route
                path="/order-detail/sparepart"
                component={SparepartOrderDetail}
              />
              <Route
                path="/pilih-metode-pembayaran"
                component={MetodePembayaran}
              />

              <Route path="/vouchers" component={Voucher} />

              <Route path="/cart" component={Cart} />
              <Route path="/sparepart" component={Seacrh} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/invoice/:id" component={Invoice} />
              <Route path="/akun" component={Akun} />
              <Route path="/wallet" component={Wallet} />
              <Route path="/withdrawal" component={Withdrawal} />

              <Redirect to="/home" />
            </Switch>
          </Suspense>
          {homeRoute.indexOf(this.props.location.pathname) !== -1 && (
            <BottomNavigation />
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
