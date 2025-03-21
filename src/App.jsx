import React, { useState } from "react";

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
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
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
    isComposing,
    setTodoList,
    handleAddTodo,
    handleRemoveTodo,
    handleKeyPress,
    setIsComposing,
  } = useTodoList();

  return (
    <div className="App">
      <header>
        <input
          type="text"
          placeholder="오늘 할 일을 적어주세요"
          value={todoList}
          onChange={(e) => setTodoList(e.target.value)}
          onKeyDown={handleKeyPress}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </header>
      <section>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
