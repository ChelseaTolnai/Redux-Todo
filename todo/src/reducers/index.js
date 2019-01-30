import { ADD_TODO } from '../actions';

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
        console.log("+")
            // console.log(state.todos.push(action.payload))
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;