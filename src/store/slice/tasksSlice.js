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

    descriptionTask:(state, action) => {
      const {id, description} = action.payload;
      const task = state.find(t => t.id === id);
      if (task) task.description = description;
    },
  },
});

export const { addTasks, deleteTasks, toggleTask, deleteAllTasks, searchTask, descriptionTask } = tasksSlice.actions;

export default tasksSlice.reducer