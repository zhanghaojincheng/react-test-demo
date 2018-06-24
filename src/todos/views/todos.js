import React from 'react';
import AddTodo from './addTodo';
import TodoList from './todoList';

class Todos extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
            </div>
        )
    }
}

export default Todos;