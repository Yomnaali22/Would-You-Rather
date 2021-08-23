import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import middleware from "./middleware";
import reducer from "./reducers";

//const store = createStore(users, middleware);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**comment made by me yomna
 * In a redux application we think in 4 steps
 * What are the Actions ? triggered by the user (must think in terms of what the user will do) put them in variables
 * Action creator return object with type property
 * Reducer "Is a function and takes two param (state, action)"
 * Store "the store takes in reducer and the middleware and update the tree"
 * we import the store to use it and we put it in the index.js file
 * when we want to use the store in other components we pass as prop
 * when I need to wire up my redux code with react ui we import "connect" from react-redux
 */

/**
 * to avoid passing the store props down to the components tree we can use a react context api
 * we start by putting const Context = React.createContext(); at the top of our react app file
 * Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 */
