import React from "react";
import candyImg from "./snickers.jpg";
import { Link } from "react-router-dom";


function CandyBar() {
    return (
        <div>
            <h1>You're not you when you're hungry</h1>
            <img src={candyImg} alt="can of coke" />
            <p><Link to="/">Return to Machine</Link></p>
        </div>
    )
}

export default CandyBar;