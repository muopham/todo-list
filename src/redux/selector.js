import { createSelector } from "@reduxjs/toolkit";

export const todoSelector = (state) => state.todoList.todo;
export const filterSelector = (state) => state.todoList.filter;

export const todoRemaining = createSelector(
  todoSelector,
  filterSelector,
  (todoList, filter) => {
    return todoList.filter((todo) => {
      if (filter === "all"){
        return todo;
      };
      return filter === "completed" ? todo.status : !todo.status;
    });
  }
);
