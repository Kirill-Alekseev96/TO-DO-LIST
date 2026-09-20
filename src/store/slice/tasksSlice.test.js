import { test, expect } from "vitest";

import reducer, {
    addTasks,
    // deleteTasks,
    // toggleTask,
    // deleteAllTasks,
    // searchTask,
    // descriptionTask,
    // filterTask,
} from "./tasksSlice";

test('addTasks добавляет задачу', () => {
    const state = [];
    const task = {id: 1, title: 'test', isDone: false, description: null};
    const action = addTasks(task);
    const newState = reducer(state, action);
    expect(newState).toHaveLength(1);
    expect(newState[0]).toEqual(task);
})
