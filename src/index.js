import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CryptoContext from "./context/CryptoContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </StrictMode>,
  rootElement
);
