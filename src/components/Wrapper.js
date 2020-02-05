import React from 'react';
import './styles/wrapper.css';

const init = ['default item'];

export default class Wrapper extends React.Component {
  constructor(props) {
    super();

    this.state = {
      addFieldText: "",
      items: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: init
    });
  }

  handleChange(e) {
    this.setState({
      addFieldText: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    init.push(this.state.addFieldText);
    this.setState({
      items: init,
      addFieldText: ""
    });
  }

  render() {
    return (
      <div>
        <h3>Wrapper component. Env var: <span>{this.props.envVar}</span></h3>
          <form name="from1" id="form1" onSubmit={this.handleSubmit} >
            <label htmlFor="addField">Look up: </label>
            <input id="addField" type="text" value={this.state.addFieldText} onChange={this.handleChange} />
            <input type="submit" value="Add"/>
          </form>
          <ul id="list">
            {
              this.state.items.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
      </div>
    );
  }
}
