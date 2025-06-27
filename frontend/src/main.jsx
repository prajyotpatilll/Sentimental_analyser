import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProvide from "./context/AppContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <AppContextProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvide>
);
