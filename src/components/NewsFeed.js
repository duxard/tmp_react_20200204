import React from 'react';

export default class NewsFeed extends React.Component {
  constructor(){
    super();
    this.sendData = this.sendData.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
      username: '',
      message: '',
      selectedOption: 'radio1'
    };
  }

  sendData(e) {
    // TODO
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  render() {
    return (
      <form name="form1" onSubmit={this.sendData}>
        <label htmlFor="text">Username: </label>
        <input id="text" type="text" onChange={this.handleUsername} value={this.state.username} />
        <br />

        <label htmlFor="w3mission">Message</label>
        <textarea id="w3mission" rows="4" cols="50" value={this.state.message} onChange={this.handleMessage} />
        <br />

        <div>
          <input type="radio" id="radio1" name="drone" value="radio1" checked={this.state.selectedOption === 'radio1'} onChange={this.handleOptionChange} />
          <label htmlFor="radio1">1</label>
        </div>

        <div>
          <input type="radio" id="radio2" name="drone" value="radio2" checked={this.state.selectedOption === 'radio2'} onChange={this.handleOptionChange} />
          <label htmlFor="radio2">2</label>
        </div>

        <div>
          <input type="radio" id="radio3" name="drone" value="radio3" checked={this.state.selectedOption === 'radio3'} onChange={this.handleOptionChange} />
          <label htmlFor="radio3">3</label>
        </div>

        <div>
          <input type="radio" id="radio4" name="drone" value="radio4" checked={this.state.selectedOption === 'radio4'} onChange={this.handleOptionChange} />
          <label htmlFor="radio4">4</label>
        </div>

        <div>
          <input type="radio" id="radio5" name="drone" value="radio5" checked={this.state.selectedOption === 'radio5'} onChange={this.handleOptionChange} />
          <label htmlFor="radio5">5</label>
        </div>

        <input type="submit" value="send" />
      </form>
    );
  }
}
