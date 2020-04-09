import React from "react";
import HerokuList from "./components/HerokuList/HerokuList";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app-main">
        <Navbar/>
        <HerokuList env="QA"/>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
