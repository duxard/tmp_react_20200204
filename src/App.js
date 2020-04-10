import React from "react";
import HerokuList from "./components/HerokuList/HerokuList";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import DummyComponentA from "./components/DummyComponentA/DummyComponentA";
import DummyComponentB from "./components/DummyComponentB/DummyComponentB";
import DummyComponentC from "./components/DummyComponentC/DummyComponentC";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app-main">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/heroku' component={HerokuList} />
          <Route path='/dummya' component={DummyComponentA} />
          <Route path='/dummyb' component={DummyComponentB} />
          <Route path='/dummyc' component={DummyComponentC} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
