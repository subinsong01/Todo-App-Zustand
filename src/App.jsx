import React from "react";
import AddTodo from "./components/AddTodo";
import RemoveTodo from "./components/RemoveTodo";
import { useTodoStore } from "./store/useTodoStore";
import useKeyPress from "./hook/useKeyPress";
function App() {
  const { todos, removeTodo } = useTodoStore();

  return (
    <div className="App">
      <header>
        <AddTodo />
      </header>
      <section>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} <RemoveTodo id={todo.id} onRemove={removeTodo} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
