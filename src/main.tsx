import ReactDOM from "react-dom/client";
import "./index.css";
import "common/fontfamily.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
