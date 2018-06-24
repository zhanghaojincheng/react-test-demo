import React from 'react';
import TodoItem from './todoItem';
import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from '../action';
import {FilterTypes} from '../../constants';

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map(item => (
                            <TodoItem
                            key={item.id}
                            text={item.text}
                            completed={item.completed}
                            onRemove={() => this.props.onRemoveTodo(item.id)}
                            onToggle={() => this.props.onToggleTodo(item.id)}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    switch(state.filter) {
        case FilterTypes.ALL:
            return {
                todos: state.todos
            }
        case FilterTypes.COMPLETED:
            return {
                todos: state.todos.filter(item => item.completed)
            }
        case FilterTypes.UNCOMPLETED:
            return {
                todos: state.todos.filter(item => !item.completed)
            }
        default:
            throw new Error('error 数据库')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);