import { createStore } from "redux";
import * as ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import todoApp from "./reducers";
import App from "./components/App";

const persistedState = {
  todos: [
    {
      id: 0,
      text: "Welcome Back!",
      completed: false
    }
  ]
};

ReactDOM.render(
  <Provider store={createStore(todoApp, persistedState)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
