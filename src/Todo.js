import React, { Component } from 'react';
import './Todo.css'

class Todo extends Component {
  render() {
  const {id, todoText, onDelete} = this.props;

  return (
    <div className="todo-container">
      <ul>
        <li className="todo-item">
          <button className="delete-btn" type="button" onClick={() => onDelete(id)}>X</button>
          {todoText}
        </li>
      </ul>
    </div>
    )
  }
}

export default Todo
