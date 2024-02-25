import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NoteContext from "./context/NoteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NoteContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NoteContext>
);
