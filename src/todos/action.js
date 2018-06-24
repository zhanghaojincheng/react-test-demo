import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actionTypes';

let nextId = 0;

export const addTodo = (text) => {
    console.log(nextId)
    return {
        type: ADD_TODO,
        text: text,
        completed: false,
        id: nextId++
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}