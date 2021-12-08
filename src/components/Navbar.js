import React from "react";
import Logo from "./airbnb-logo.png";

export default function Navbar() {
    return(
        <div className="Navbar">
            <img src={Logo} alt="Airbnb Logo" className="logo"/>
        </div>
    )
}