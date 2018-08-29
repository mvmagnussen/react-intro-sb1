import React from "react";
import ReactDOM from "react-dom";
import RateApp from "./components/RateApp/RateApp";

const appLocation = document.getElementById("app");

ReactDOM.render(<RateApp title="Hva synes du om denne appen?" />, appLocation);
