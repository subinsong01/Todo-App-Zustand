import React from "react";

function AddTodo({
  todoList,
  setTodoList,
  handleAddTodo,
  handleKeyPress,
  setIsComposing,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="오늘 할 일을 적어주세요"
        value={todoList}
        onChange={(e) => setTodoList(e.target.value)}
        onKeyDown={handleKeyPress}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <button onClick={handleAddTodo}>더하기</button>
    </div>
  );
}

export default AddTodo;
