import React from 'react';
import Wrapper from './components/Wrapper';
import TwoBoxes from './components/TwoBoxes';

const App = () => {
  return (
    <div className="App">
      <Wrapper envVar="ven_asta"/>
      <hr />
      <TwoBoxes />
      <hr />
    </div>
  );
}

export default App;
