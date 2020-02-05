import React from 'react';

export default class TwoBoxesChild extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.parentChangeColor();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Toggle parent's color</button>
      </div>
    );
  }
}
