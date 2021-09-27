import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine"
import Soda from "./Soda"
import CandyBar from "./CandyBar"
import Pretzel from "./Pretzels"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/candy">
          <CandyBar />
        </Route>
        <Route exact path="/pretzel">
          <Pretzel />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
