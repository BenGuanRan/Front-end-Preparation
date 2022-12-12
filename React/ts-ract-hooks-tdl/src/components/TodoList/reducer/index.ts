import { TypeTodoList, TypeAction, TypeTodo, TypeState } from "../typings";


export function reducer(state: TypeState, action: TypeAction): TypeState {
    switch (action.type) {
        case 'ADD_TODO':
            return { todoList: [(action.value as TypeTodo), ...state.todoList] };
        case 'COMPLETE_TODO':
            return {
                todoList: state.todoList.map(
                    (todo: TypeTodo) => todo.id === (action.value as number) ? { ...todo, completed: !todo.completed } : { ...todo }
                )
            }
        case 'INIT_TODOLIST':
            return { todoList: [...(action.value as TypeTodoList)] }
        default:
            throw new Error('No such action!!!');
    }
}