import React from 'react';
import axios from 'axios';

let store = [];

export default class Heroky extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      lookup: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({
      lookup: e.target.value
    });
  }

  handleDelete(e) {
    let id = e.target.parentNode.id;
    store.splice(store.findIndex(el => el.id===Number(id)), 1);
    this.setState({
      todos: store
    });
    this.filterList();
  }

  handleSubmit = e => {
    e.preventDefault();
    store.push({id: store.length+1, title: this.state.lookup});

    this.setState({
      todos: store,
      lookup: ''
    });
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {

        let out = res.data.slice(0,5).map(item => {
          let {id, title} = item;
          return {id, title};
        });

        store = out;

        this.setState({
          todos: store
        });

        console.log(store)
      })
      .catch(e => console.log(e))
  }

  filterList = () => {
     let filteredList = store.filter(el => {
       return ~el.title.indexOf(this.inputText.value);
     });
     this.setState({
       todos: filteredList
     });
  }

  render() {
    return (
      <div>
        <form name="form1" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.lookup} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
        <form name="form2">
          <input type="text" onChange={this.filterList} ref={input => this.inputText = this}/>
        </form>
        <ul>
          {
            this.state.todos.map((todo, ind) => {
              return (
                <li key={todo.id} id={todo.id}>{todo.title} <button onClick={this.handleDelete}>delete</button></li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
