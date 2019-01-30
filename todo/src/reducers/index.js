import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
    todos: [
        {
            value: 'Walk the dog.',
            completed: false
        },
        {
            value: 'Cook food.',
            completed: false
        },       
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map( (todo, index) => 
                    action.payload === index
                    ?   {...todo, completed: !todo.completed}
                    :   todo
                )
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter( (todo, index) => 
                    index !== action.payload
                )
            }
        default:
            return state;
    }
};

export default reducer;