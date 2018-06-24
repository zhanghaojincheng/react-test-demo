import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            checked: this.props.completed ? {checked: true} : {}
        }
    }
    render() {
        return (
            <li>
                <input type="checkbox" {...this.state.checked} readOnly onClick={this.props.onToggle} />
                    {this.props.text}
                <button onClick={this.props.onRemove}>X</button>
            </li>
        )
    }
}

export default TodoItem;