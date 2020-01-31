import React from "react";
import "./styles.css";

import { Link, Route, Switch } from "react-router-dom";

import JestTestsCounter from "./components/JestTestsCounter.js";
import CurrencyConverter from "./components/CurrencyConverter";
import FatArrow from "./components/FatArrow";
import RenderProp2 from "./components/RenderProps2";
import RenderProp3 from "./components/RenderProps3";

function App() {
  return (
    <div className="main m-10">
      <div className="links">
        <Link to="/testing">JestTestsCounter</Link>
        <Link to="/currency-converter">Currency Converter</Link>
        <Link to="/fat-arrow">Fat Arrow</Link>
        <Link to="/render-prop">RenderProps</Link>
        <Link to="/render-prop3">RenderProps3</Link>
      </div>

      <Switch>
        <Route exact path="/testing">
          <JestTestsCounter />
        </Route>
        <Route exact path="/currency-converter">
          <CurrencyConverter />
        </Route>
        <Route exact path="/fat-arrow">
          <FatArrow />
        </Route>
        <Route exact path="/render-prop">
          <RenderProp2 />
        </Route>
        <Route exact path="/render-prop3">
          <RenderProp3 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
