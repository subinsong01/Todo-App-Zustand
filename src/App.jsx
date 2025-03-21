import React, { useState } from "react";
import RemoveTodo from "./components/RemoveTodo";
import AddTodo from "./components/AddTodo";

function useTodoList() {
  const [todoList, setTodoList] = useState("");
  const [todos, setTodos] = useState([]);
  const [isComposing, setIsComposing] = useState(false);

  const handleAddTodo = () => {
    const trimmedTodo = todoList.trim();
    if (trimmedTodo && !todos.some((todo) => todo.text === trimmedTodo)) {
      const newTodo = { id: Date.now(), text: trimmedTodo };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoList("");
    }
  };
  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isComposing) {
      e.preventDefault();
      handleAddTodo();
    }
  };

  return {
    todoList,
    todos,
    isComposing,
    setTodoList,
    handleAddTodo,
    handleRemoveTodo,
    handleKeyPress,
    setIsComposing,
  };
}

function App() {
  const {
    todoList,
    todos,
    setTodoList,
    handleAddTodo,
    handleRemoveTodo,
    handleKeyPress,
    setIsComposing,
  } = useTodoList();

  return (
    <div className="App">
      <header>
        <AddTodo
          todoList={todoList}
          setTodoList={setTodoList}
          handleAddTodo={handleAddTodo}
          handleKeyPress={handleKeyPress}
          setIsComposing={setIsComposing}
        />
      </header>
      <section>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <RemoveTodo id={todo.id} onRemove={handleRemoveTodo} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
