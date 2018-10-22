import { Provider } from "react-redux";
import App from "./App";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import InstantSearchApp from "./InstantSearchApp";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/home:filter?" component={App} />
        <Route path="/search" component={InstantSearchApp} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
