import React from "react";
import HerokuService from "../services/HerokuService";

let store = [];

export default class HerokuList extends React.Component {
  constructor(props) {
    super(props);
    this._herokuService = new HerokuService();
    this.addTodo = this.addTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      todos: [],
      inputText: ""
    };
  }

  addTodo(e) {
    e.preventDefault();
    //TODO
  }

  handleInput(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  componentDidMount() {
    this._herokuService.getTodos()
      .then(data => {
        store.push(...data);
        this.setState({
          todos: store
        }, () => console.log(this.state.todos));
      })
      .catch(error => console.log(`Error has been caught in HerokuList: ${error}`));
  }

  render() {
    return (
      <div className="main">
        <p>{this.props.env}</p>
        <div className="main-form">
          <form onSubmit={this.addTodo}>
            <input className="main-form-text"
                   type="text"
                   value={this.state.inputText}
                   onChange={this.handleInput}
            />
            <input className="main-form-btnSubmit" type="submit"/>
          </form>
        </div>
        <hr />
        <div className="main-list">
          {
            this.state.todos.map(todo => <div key={todo._id}>{todo.item}</div>)
          }
        </div>
      </div>
    );
  }
}
