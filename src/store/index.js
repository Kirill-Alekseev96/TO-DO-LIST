import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './slice/tasksSlice'

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  }
})


// Сохраняем задачи в localStorage при каждом изменении
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  } catch (e) {
    console.error('Не удалось сохранить задачи', e);
  }
});

export default store;