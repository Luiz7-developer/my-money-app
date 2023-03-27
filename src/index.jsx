import React from "react";
import ReactDOM from "react-dom";
import reducers from "./main/reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import App from "./main/app";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("app")
);
// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";

// import promise from "redux-promise";
// import multi from "redux-multi";
// import thunk from "redux-thunk";

// import reducers from "./main/reducers";
// import App from "./main/app";

// const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("app")
// );
