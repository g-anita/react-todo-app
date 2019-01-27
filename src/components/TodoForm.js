import React, { Component } from 'react';
import '../stylesheets/style.css';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event){
  this.setState(
    {[event.target.name]: event.target.value}
  );
}

handleSubmit(event){
  event.preventDefault();
  this.props.onSave({...this.state});
  this.setState({
    todoText: '',
  })
}

  render(){
    const {todoText} = this.state;
    return(
    <form onSubmit={this.handleSubmit}>
      <input
          className="todo-input"
          name='todoText'
          type='text'
          key='todoText'
          value={todoText}
          autoComplete="off"
          onChange={this.handleChange}
          placeholder="Add New Todo"
      />
    </form>
    )
  }
}

export default TodoForm
