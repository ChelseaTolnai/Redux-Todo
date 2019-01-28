import React from 'react';
import { connect } from 'react-redux';

const Todos = (props) => {
    return (
        <div>
            {props.todos.map(todo => 
                <div key={todo.value}>{todo.value}</div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, {})(Todos)