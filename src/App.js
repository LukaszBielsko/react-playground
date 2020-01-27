import React from 'react';
import './styles.css'

import {Link,Route, Switch} from 'react-router-dom';

import JestTestsCounter from './components/JestTestsCounter.js';
import CurrencyConverter from './components/CurrencyConverter';
import FatArrow from './components/FatArrow';


function App() {
  return (
    <div className="main m-10">

      <div className="links">
        <Link to="/testing">JestTestsCounter</Link>
        <Link to="/currency-converter">Currency Converter</Link>
        <Link to="/fat-arrow">Fat Arrow</Link>
      </div>
  
      <Switch>
        <Route exact path="/testing"> 
          <JestTestsCounter/>
        </Route>
        <Route exact path="/currency-converter">
          <CurrencyConverter/>
        </Route>
        <Route exact path="/fat-arrow">
          <FatArrow/>
        </Route>
      </Switch>

    </div>
    
  );
}

export default App;
