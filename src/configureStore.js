import { createStore } from "redux";
import todoApp from "./reducers";

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    // if the console group API is not available in the browser
    return rawDispatch;
  }
  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd();
    return returnValue;
  };
};

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;
  return action => {
    if (typeof action.then === "function") { // if it is a promise
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

const configureStore = () => {
  const store = createStore(todoApp);
  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.dispatch = addPromiseSupportToDispatch(store);
  return store;
};

export default configureStore;
