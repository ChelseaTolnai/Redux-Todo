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
    switch (action) {
        case "":
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;