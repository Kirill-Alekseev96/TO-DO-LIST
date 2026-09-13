import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks:(state, action) => {
      state.push(action.payload);
    },

    deleteTasks:(state, action) => {
      console.log(action.payload);
        return state.filter((task) => task.id !== action.payload);
    },

    deleteAllTasks:(state) => {
      state.length = 0;
    },

    toggleTask:(state, action) => {
      state.map((task) => task.id === action.payload ? task.isDone = !task.isDone : task);
    },

    // searchTask:(state, action) => {
    //   return state.filter((task) => task.title.toUpperCase().incluses(action.payload.toUpperCase()));
    // },
  },
});

export const { addTasks, deleteTasks, toggleTask, deleteAllTasks, searchTask } = tasksSlice.actions;

export default tasksSlice.reducer