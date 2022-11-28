import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReducersProvider } from "./reducers/reducers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ReducersProvider>
    <App />
  </ReducersProvider>
);
