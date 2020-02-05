import React from 'react';
import TwoBoxesChild from './TwoBoxesChild';
import './styles/twoboxes.css';

export default class TwoBoxes extends React.Component {
  changeColor = () => {
    console.log('trigger');
  }

  render() {
    return (
      <div>
        <p className="green">STATUS</p>
        <TwoBoxesChild parentChangeColor={this.changeColor}/>
      </div>
    );
  }
}
