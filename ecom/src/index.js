import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

/* import { HomePage } from "./pages/home/home";
<HomePage />; */
import { Pages } from "./pages";
import Routing from "./routing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Routing ></Routing>
    {/* <Pages.HomePage name="from props" /> */}
    
  </React.StrictMode>
);
