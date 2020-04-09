import React from "react";
import HerokuList from "./components/HerokuList/HerokuList";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app-main">
      <Navbar/>
      <HerokuList env="QA"/>
    </div>
  );
};

export default App;
