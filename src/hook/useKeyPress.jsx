import { useEffect } from "react";

function useKeyPress(isComposing, handleAddTodo, todoText) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && !isComposing && todoText.trim()) {
        e.preventDefault();
        handleAddTodo(todoText);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isComposing, handleAddTodo, todoText]);

  return null;
}

export default useKeyPress;
