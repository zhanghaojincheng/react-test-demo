import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.refInput = this.refInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        if(this.input.value.trim()) {
            this.props.onClick(this.input.value)
        }
        this.input.value = '';
    }
    refInput(node) {
        this.input = node;
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref={this.refInput}/>
                    <button type="submit">添加</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (text) => {
            dispatch(addTodo(text))
        }
    }
} 

export default connect(null, mapDispatchToProps)(AddTodo);