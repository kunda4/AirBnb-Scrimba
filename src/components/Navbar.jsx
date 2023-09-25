import React from "react";
import AirbnbLogo from '/airbnb.png'

export default function Navbar(){
    return(
        <nav>
           <img src={AirbnbLogo} alt="airbnb" />
           <h3>Hello Africa</h3>
        </nav>
    )
}