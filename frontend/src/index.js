import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "./Context/Auth-Context";
const container = document.querySelector("#root");
export const endpoint = "http://localhost:4000";
const root = createRoot(container);
root.render(
  <AuthContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContext>
);
