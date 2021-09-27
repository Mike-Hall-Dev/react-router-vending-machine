import React from "react";
import cokeImg from "./coke.jpeg"
import { Link } from "react-router-dom";


function Soda() {
    return (
        <div>
            <h1>Crisp and refreshing</h1>
            <img src={cokeImg} alt="can of coke" />
            <p><Link to="/">Return to Machine</Link></p>

        </div>
    )
}

export default Soda;