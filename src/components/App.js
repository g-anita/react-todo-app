import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';
import '../stylesheets/style.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todoText: "",
      nextId: 0,
    }
    this.onDelete = this.onDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
}

onDelete(id){
  const todos = this.state.todos.filter(todo => todo.id !== id);
  this.setState({todos});
}

handleSave(todo) {
  this.setState((prevState, props) => {
    const newTodo = {...todo, id: this.state.nextId};
    return {
      nextId: prevState.nextId + 1,
      todos: [...this.state.todos, newTodo],
    }
  });
}

  render() {
    return (
      <div className="App-container">
        <header className="header-container">Todo List</header>
        <TodoForm onSave={this.handleSave}/>
        <Todos onDelete={this.onDelete} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
