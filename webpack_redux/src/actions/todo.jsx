let nextTodoId = 0;

export function addToDo(text) {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text,
    };
}

export function toggleToDo(id) {
    return {
        type: 'TOGGLE_TODO',
        id: id,
    };
}
