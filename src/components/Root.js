import { Provider } from "react-redux";
import App from "./App";
import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;
