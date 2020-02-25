import React from 'react';
import Wrapper from './components/Wrapper';
import TwoBoxes from './components/TwoBoxes';
import Heroky from './components/Heroky';
import NewsFeed from './components/NewsFeed';

const App = () => {
  return (
    <div className="App">
      <Wrapper envVar="ven_asta"/>
      <hr />
      <TwoBoxes />
      <hr />
      <Heroky />
      <hr />
      <NewsFeed />
    </div>
  );
}

export default App;
