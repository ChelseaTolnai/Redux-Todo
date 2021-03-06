import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodoCompleted, deleteTodo } from '../actions'

class TodosContainer extends React.Component {

    state = {
        newTodo: ''
    }

    handleInput = (e) => {
        this.setState({newTodo: e.target.value})
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ''});
    }

    handleToggle = (e, index) => {
        e.preventDefault();
        this.props.toggleTodoCompleted(index);
    }

    handleDelete = (e, index) => {
        e.preventDefault();
        this.props.deleteTodo(index);
    }

    render () {
        return (
            <div>
                <h3>Todo List</h3>
                <ul>
                {this.props.todos.map((todo, index) => 
                    <li key={index}>
                        <span 
                            onClick={e => this.handleToggle(e, index)} 
                            className={todo.completed ? "completed" : null}
                        >
                            {todo.value}
                        </span>
                        <span onClick={e => this.handleDelete(e, index)}>X</span>
                    </li>
                )}
                </ul>

                <form onSubmit={this.handleAddTodo}> 
                    <input 
                        type="text" 
                        placeholder="...new todo" 
                        value={this.state.newTodo}
                        onChange={this.handleInput}
                    />
                    <button type="submit" onClick={this.handleAddTodo}>Add</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {addTodo, toggleTodoCompleted, deleteTodo })(TodosContainer)