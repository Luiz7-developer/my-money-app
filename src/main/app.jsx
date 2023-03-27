import React from "react";
import "../common/template/dependencies";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";
import Routes from "./routes";
import Messagens from "../common/msg/messagens";

export default (props) => (
  <div className="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
    <Messagens />
  </div>
);
