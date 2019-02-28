import React, { Component } from "react";
import TodoHeader from "./TodoHeader";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoList />
      </div>
    );
  }
}

export default App;
