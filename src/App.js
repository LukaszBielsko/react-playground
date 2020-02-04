import React from "react";
import "./styles.css";

import { Link, Route, Switch } from "react-router-dom";

import JestTestsCounter from "./components/JestTestsCounter.js";
import CurrencyConverter from "./components/CurrencyConverter";
import FatArrow from "./components/FatArrow";
import RenderProp2 from "./components/RenderProps2";
import RenderProp3 from "./components/RenderProps3";
import LifeCycle from "./components/LifeCycle";

function App() {
  return (
    <div>
      <div className="links justify-around flex m-10">
        <Link to="/testing">JestTestsCounter</Link>
        <Link to="/currency-converter">Currency Converter</Link>
        <Link to="/fat-arrow">Fat Arrow</Link>
        <Link to="/render-prop">RenderProps</Link>
        <Link to="/render-prop3">RenderProps3</Link>
        <Link to="/life-cycle">LifeCycle</Link>
      </div>

      <Switch>
        <div className="max-w-xl m-auto ">
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
          <Route exact path="/life-cycle">
            <LifeCycle />
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
