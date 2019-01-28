import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

const TodosContainer = (props) => {

    const handleAddTodo = (e) => {
        e.preventDefault();
        props.addTodo()
    }
    return (
        <div>
            <ul>
            {props.todos.map(todo => 
                <li key={todo.value}>{todo.value}</li>
            )}
            </ul>

            <form>
                <input type="text" placeholder="...new todo"></input>
                <button type="submit" onClick={ e => handleAddTodo(e)}>Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, {addTodo})(TodosContainer)