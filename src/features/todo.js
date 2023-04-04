import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

let initialValue = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: { value: initialValue },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), newTodo: action.payload, completed: false };
      state.value.unshift(todo);
    },
    removeTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    doneTodo: (state, action) => {
      state.value[action.payload].completed =
        !state.value[action.payload].completed;
    },
  },
});

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
