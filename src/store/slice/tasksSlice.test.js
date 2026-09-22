import { test, expect } from "vitest";

import reducer, {
    addTasks,
    deleteTasks,
    toggleTask,
    deleteAllTasks,
    descriptionTask,
} from "./tasksSlice";

test('addTasks добавляет задачу', () => {
    const state = [];
    const task = {id: 1, title: 'test', isDone: false, description: null};
    const action = addTasks(task);
    const newState = reducer(state, action);
    expect(newState).toHaveLength(1);
    expect(newState[0]).toEqual(task);
})


test('deleteTasks удаление задачи по id', () => {
    const id = 2;
    const state = [
        {id: 1, title: 'test', isDone: false, description: null},
        {id: 2, title: 'test_2', isDone: true, description: 'Описание задачи'},
        {id: 3, title: 'test_3', isDone: false, description: null},
    ];
    const action = deleteTasks(id);
    const newState = reducer(state, action);
    expect(newState).toHaveLength(2);
    expect(newState.find(t => t.id === '2')).toBeUndefined();
})

test('deleteAllTasks удаление всех задач', () => {
    const state = [
        {id: 1, title: 'test', isDone: false, description: null},
        {id: 2, title: 'test_2', isDone: true, description: 'Описание задачи'},
        {id: 3, title: 'test_3', isDone: false, description: null},
    ];
    const action = deleteAllTasks();
    const newState = reducer(state, action);
    expect(newState).toHaveLength(0);
})

test('toggleTask выполнение задачи', () => {
    const id = 2;

    const state = [
        {id: 1, title: 'test', isDone: false, description: null},
        {id: 2, title: 'test_2', isDone: true, description: 'Описание задачи'},
        {id: 3, title: 'test_3', isDone: false, description: null},
    ];
    const action = toggleTask(id);
    const newState = reducer(state, action);
    
    expect(newState.find((task) => task.id === 1).isDone).toBe(false);  
    expect(newState.find((task) => task.id === 2).isDone).toBe(false);   
    expect(newState.find((task) => task.id === 3).isDone).toBe(false);  
})

test('descriptionTask  описание задач', () => {
    const description = 'Описание задачи';
    const id = 1;

    const state = [
        {id: 1, title: 'test', isDone: false, description: ''},
        {id: 2, title: 'test_2', isDone: true, description: 'Описание задачи'},
        {id: 3, title: 'test_3', isDone: false, description: ''},
    ];
    const action = descriptionTask({id, description});
    const newState = reducer(state, action);
    
    expect(newState.find((task) => task.id === id).description).toBe(description); 
})