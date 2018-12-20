import React, { Component } from 'react';
import Todo from './Todo';
import './Todos.css'

class Todos extends Component {

  render(){
    const {onDelete} = this.props
    const todos = this.props.todos.map((todo, i) => (
      <Todo key={todo.id} {...todo} onDelete={onDelete} />
    ))

    return (
      <div className="todos-container">
        {todos}
      </div>
    );
  }
}

export default Todos
