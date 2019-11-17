import React from 'react';
import './styles.css'

import {Link,Route, Switch} from 'react-router-dom';

import JestTestsCounter from './components/JestTestsCounter.js';


function App() {
  return (
    <div className="main m-10">

      <div className="links">
        <Link to="/testing">JestTestsCounter</Link>
      </div>
  
      <Switch>
        <Route exact path="/testing"> 
          <JestTestsCounter/>
        </Route>
      </Switch>

    </div>
    
  );
}

export default App;
