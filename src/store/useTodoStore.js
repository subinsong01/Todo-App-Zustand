import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => {
      const trimmedText = text.trim();
      if (
        !trimmedText ||
        state.todos.some((todo) => todo.text === trimmedText)
      ) {
        return state;
      }
      return {
        todos: [...state.todos, { id: Date.now(), text: trimmedText }],
      };
    }),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
