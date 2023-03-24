import "./styles.css";
import React from "react";
// import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoApp() {
  return (
    <div className="app">
      <div className="todo-list">
        todo items go here
        <TodoForm />
      </div>
    </div>
  );
}
