import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import counterStore from "./Store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* connecting React components to a centralized store */}
    <Provider store={counterStore}>
      <App />
    </Provider>
  </StrictMode>
);
