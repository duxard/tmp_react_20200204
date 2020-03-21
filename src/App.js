import React from 'react';
import HerokuList from "./components/HerokuList/HerokuList";

function App() {
  return (
    <div className="App">
      <p>Start page</p>
      <HerokuList env="QA"/>
    </div>
  );
}

export default App;
