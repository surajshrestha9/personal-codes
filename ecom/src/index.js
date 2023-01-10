import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

/* import { HomePage } from "./pages/home/home";
<HomePage />; */
import { Pages } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pages.HomePage name="from props" />
    {/* props yesari pass garne components ma 
  class based components ko case ma constructor le receive garcha
  */}
  </React.StrictMode>
);
