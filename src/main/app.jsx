import React from "react";
import "../common/template/dependencies";
import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import Footer from "../common/template/footer";

import Messagens from "../common/msg/messagens";

export default (props) => (
  <div className="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div className="content-wrapper">{props.children}</div>
    <Footer />
    <Messagens />
  </div>
);
