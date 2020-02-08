import React from 'react';
import Wrapper from './components/Wrapper';
import TwoBoxes from './components/TwoBoxes';
import Heroky from './components/Heroky';

const App = () => {
  return (
    <div className="App">
      <Wrapper envVar="ven_asta"/>
      <hr />
      <TwoBoxes />
      <hr />
      <Heroky />
      <hr />
    </div>
  );
}

export default App;
