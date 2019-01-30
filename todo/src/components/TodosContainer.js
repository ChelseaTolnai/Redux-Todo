import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class TodosContainer extends React.Component {

    state = {
        newTodo: ''
    }

    handleInput = (e) => {
        this.setState({newTodo: e.target.value})
    }

    handleAddTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({newTodo: ''})
    }

    render () {
        return (
            <div>
                <h3>Todo List</h3>
                <ul>
                {this.props.todos.map((todo, index) => 
                    <li key={index}>{todo.value}</li>
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
export default connect(mapStateToProps, {addTodo})(TodosContainer)