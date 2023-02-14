import { createSlice } from "@reduxjs/toolkit";

const todo =
  localStorage.getItem("todoList") !== null
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo,
    filter: "all",
  },
  reducers: {
    searchFilter: (state, action) => {
      state.filter = action.payload;
    },

    addTodo: (state, action) => {
      state.todo.push(action.payload);
      localStorage.setItem(
        "todoList",
        JSON.stringify(
          state.todo.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
      localStorage.setItem(
        "todoList",
        JSON.stringify(
          state.todo.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    toggleTodo: (state, action) => {
      const index = state.todo.findIndex((todo) => todo.id === action.payload);
      state.todo[index].status = !state.todo[index].status;
      localStorage.setItem(
        "todoList",
        JSON.stringify(
          state.todo.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
    },

    clearTodo: (state) => {
      state.todo = [];
      localStorage.setItem(
        "todoList",
        JSON.stringify(
          state.todo.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
        )
      );
      return state;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, clearTodo, searchFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
