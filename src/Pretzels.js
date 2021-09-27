import React from "react";
import pretzelImg from "./pretzel.jpeg";
import { Link } from "react-router-dom";


function Pretzel() {
    return (
        <div>
            <h1>The perfect snack</h1>
            <img src={pretzelImg} alt="can of coke" />
            <p><Link to="/">Return to Machine</Link></p>

        </div>
    )
}

export default Pretzel;