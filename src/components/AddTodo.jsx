import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import useKeyPress from "../hook/useKeyPress";

function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (todoText.trim()) {
      addTodo(todoText);
      setTodoText("");
    }
  };

  useKeyPress(isComposing, handleAdd, todoText);

  return (
    <div>
      <input
        type="text"
        placeholder="오늘 할 일을 적어주세요"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <button onClick={handleAdd}>등록</button>
    </div>
  );
}

export default AddTodo;
