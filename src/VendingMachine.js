import React from "react";
import { Link } from "react-router-dom";
import machineImg from "./vending.jpeg";

function VendingMachine() {
    return (
        <div>
            <h1>Please select a snack</h1>
            <img src={machineImg} alt="vending machine" />
            <ul>
                <li><Link to="soda">Soda</Link></li>
                <li><Link to="candy">Candy</Link></li>
                <li><Link to="pretzel">Pretzel</Link></li>
            </ul>
        </div>
    )
}

export default VendingMachine;