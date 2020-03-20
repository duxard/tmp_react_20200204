import React from 'react';
// import HerokuService from "../services/HerokuService";

export default class HerokuList extends React.Component {
  constructor(props) {
    super(props);
    // this._herokuService = new HerokuService();
  }

  componentDidMount() {
    // console.log( this._herokuService.getTodos() );
  }

  render() {
    return (
      <div>
        <p>{this.props.env}</p>
        <p>List...</p>
      </div>
    );
  }
}
