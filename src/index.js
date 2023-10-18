import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavotiesContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavotiesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavotiesContextProvider>,
  document.getElementById("root")
);
