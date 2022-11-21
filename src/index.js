import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./stores";
import App from "./App";
import './App.css';
import 'leaflet/dist/leaflet.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);
