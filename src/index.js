import { createStore } from "redux";
import * as ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import todoApp from "./reducers";
import App from "./components/App";

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
