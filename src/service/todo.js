import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todoState");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todoState", serializedState);
  } catch {
    Error;
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: loadState(),
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), newTodo: action.payload, completed: false };
      state.unshift(todo);
      saveState(state);
    },
    removeTodo: (state, action) => {
      state.splice(action.payload, 1);
      saveState(state);
    },
    doneTodo: (state, action) => {
      state[action.payload].completed = !state[action.payload].completed;
      saveState(state);
    },
    EditTodo: (state, action) => {
      const { id, newTodo } = action.payload;
      state[id].newTodo = newTodo;
      saveState(state);
    },
  },
});

export const { addTodo, removeTodo, doneTodo, EditTodo } = todoSlice.actions;
export default todoSlice.reducer;
