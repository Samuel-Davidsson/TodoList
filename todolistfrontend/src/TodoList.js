import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Button from "react-bootstrap/Button";

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todosShowing: "all"
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            done: !todo.done
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodosShowing = string => {
    this.setState({
      todosShowing: string
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    let todos = [];

    if (this.state.todosShowing === "all") {
      todos = this.state.todos;
    } else if (this.state.todosShowing === "active") {
      todos = this.state.todos.filter(todo => !todo.done);
    } else if (this.state.todosShowing === "complete") {
      todos = this.state.todos.filter(todo => todo.done);
    }
    return (
      <div>
        <div>
          Todos left: {this.state.todos.filter(todo => !todo.done).length}
        </div>
        <div>
          <TodoForm onSubmit={this.addTodo} />
          {todos.map(todo => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              onDelete={() => this.handleDeleteTodo(todo.id)}
              todo={todo}
            />
          ))}
        </div>
        <div className="button-div">
          <Button
            variant="secondary"
            className="button"
            onClick={() => this.updateTodosShowing("all")}
          >
            All
          </Button>
          <Button
            variant="secondary"
            className="button"
            onClick={() => this.updateTodosShowing("active")}
          >
            Active
          </Button>
          <Button
            variant="secondary"
            className="button"
            onClick={() => this.updateTodosShowing("complete")}
          >
            Done
          </Button>
        </div>
      </div>
    );
  }
}
