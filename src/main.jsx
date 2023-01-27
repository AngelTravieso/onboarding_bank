import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { OnboardingApp } from "./OnboardingApp";
import "./index.css";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter */}
    <BrowserRouter>
      {/* Redux Provider */}
      <Provider store={store}>
        {/* App */}
        <OnboardingApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
