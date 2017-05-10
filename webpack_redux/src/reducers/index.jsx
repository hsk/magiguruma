export function reducer(state, action) {
    switch (action.type) {
    case 'ADD_TODO':
        return {
            todos: [...state.todos, {id: action.id, text: action.text, completed: false}]
        };
    case 'TOGGLE_TODO':
        return {
            todos: state.todos.map(t => {
                if (t.id !== action.id) return t;
                return Object.assign({}, t, {completed: !t.completed});
            })
        };
    default:
        return state;
    }
}
