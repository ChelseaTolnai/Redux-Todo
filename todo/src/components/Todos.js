import React from 'react';
import { connect } from 'react-redux';

const Todos = (props) => {
    return (
        <div>
            {props.todos.map(todo => 
                <div>{todo.value}</div>
            )}
        </div>
    )
}

export default connect(null, {})(Todos)