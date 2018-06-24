import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                },
                ...state
            ]
        case REMOVE_TODO:
            return state.filter(item => item.id !== action.id)
        case TOGGLE_TODO:
            return state.map(item => {
                    if(item.id === action.id) {
                        return {...item, completed: !item.completed}
                    } else {
                        return item
                    }
                })
        default:
            return state
    }
}