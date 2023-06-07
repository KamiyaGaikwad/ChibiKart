import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {ProductContext,ProductProvider} from "./context/ProductContext";
// import { ToastContainer, toast } from 'react-toastify';

export {ProductContext};

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
        {/* <ToastContainer /> */}
    </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
