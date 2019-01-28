import React from 'react';
import { connect } from 'react-redux';

const TodosContainer = (props) => {
    return (
        <div>
            {props.todos.map(todo => 
                <div key={todo.value}>{todo.value}</div>
            )}

            <form>
                <input type="text" placeholder="...new todo"></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, {})(TodosContainer)