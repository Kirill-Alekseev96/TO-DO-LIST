import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './slice/tasksSlice'

export default configureStore({
  reducer: {
    tasks: tasksSlice,
  }
})