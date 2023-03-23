//========================================================
// With redux
//========================================================

/* import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  return state;
};

export const store = createStore(reducerFn);
*/

//========================================================
// With redux-toolkit
//========================================================

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
    addBy: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    resetCounter: (state, action) => {
      state.counter = 0;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});
