import React from "react";
import ReactDom from "react-dom";
import App from "./app";
import './index.css';
const createHistory = require("history").createBrowserHistory
const history = createHistory();
ReactDom.render(<App history={history}/>, document.getElementById('app'));