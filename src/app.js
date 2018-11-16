import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "../node_modules/normalize.css/normalize.css";
import "./styles/style.scss";

const store = configureStore();
console.log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById("app")); 