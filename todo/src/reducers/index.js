import { ADD_TODO, TOGGLE_TODO } from '../actions';

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
                complete: false
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
        default:
            return state;
    }
};

export default reducer;