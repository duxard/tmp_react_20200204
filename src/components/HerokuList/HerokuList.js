import React from "react";
import HerokuListService from "./HerokuListService";
import { isInputValid } from "./HerokuListValidators";
import "./styles/herokuList.css";

let store = [];

export default class HerokuList extends React.Component {
  constructor(props) {
    super(props);
    this._herokuService = new HerokuListService();
    this.addTodo = this.addTodo.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.filterOutList = this.filterOutList.bind(this);
    this.state = {
      todos: [],
      inputText: "",
      isInputValid: true
    };
  }

  showWarning() {
    return this.state.isInputValid ? "mNonVisible" : "mVisible";
  }

  addTodo(e) {
    e.preventDefault();
    const newTodoItem = this.state.inputText;
    if(!isInputValid(newTodoItem)) {
      this.setState({
        isInputValid: false
      });
      return;
    }

    this._herokuService.postTodos({item: newTodoItem})
      .then(data => {
        store.push(data);
        this.setState({
          todos: store,
          inputText: "",
          isInputValid: true
        });
      })
      .catch(error => console.log(error));
  }

  handleInput(e) {
    this.setState({
      inputText: e.target.value
    })
  }

  filterOutList(e) {
    const filteredList = store.filter(todoItem => {
      return !!~todoItem.item
        .toLowerCase()
        .indexOf(this.filterListText.value.toLowerCase());
    });
    this.setState({
      todos: filteredList
    });
  }

  componentDidMount() {
    store.splice(0);
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
            <input className="main-form-text mDisplayBlock"
                   type="text"
                   value={this.state.inputText}
                   onChange={this.handleInput}
            />
            <div className={`main-form-warning mErrorColor ${this.showWarning()}`} >The data is invalid</div>
            <input className="main-form-btnSubmit" type="submit"/>
          </form>
        </div>
        <hr />
        <input type="text"
               className="main-filterList mDisplayBlock"
               onChange={this.filterOutList}
               ref={input => this.filterListText = input}
        />
        <div className="main-list">
          {
            this.state.todos.map(todo => <div key={todo._id}>{todo.item}</div>)
          }
        </div>
      </div>
    );
  }
}
