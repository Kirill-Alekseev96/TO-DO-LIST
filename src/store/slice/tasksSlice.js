import { createSlice } from "@reduxjs/toolkit";

function loadTasks() {
  try {
    const raw = localStorage.getItem('tasks');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Не удалось загрузить задачи', e);
    return [];
  }
}

const initialState = loadTasks();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks:(state, action) => {
      state.push(action.payload);
    },

    deleteTasks:(state, action) => {
        return state.filter((task) => task.id !== action.payload);
    },

    deleteAllTasks:(state) => {
      state.length = 0;
    },

    toggleTask:(state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },

    descriptionTask:(state, action) => {
      const {id, description} = action.payload;
      const task = state.find(t => t.id === id);
      if (task) task.description = description;
    },
  },
});

export const { addTasks, deleteTasks, toggleTask, deleteAllTasks, searchTask, descriptionTask, filterTask } = tasksSlice.actions;

export default tasksSlice.reducer