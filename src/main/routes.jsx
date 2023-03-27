import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";
import Dashboard from "../dasboard2/dashboard2";
import App from "./app";
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="/billingCycles" component={BillingCycle}></Route>
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
