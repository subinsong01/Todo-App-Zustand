import React from "react";

function RemoveTodo({ id, onRemove }) {
  return <button onClick={() => onRemove(id)}>삭제</button>;
}

export default RemoveTodo;
