import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";
import { loadFromLocalStorage } from "./LocalStorage";
import { RootState } from "./store";

export interface ChangeStatus {
    id:string,
    completed: boolean
}
export type todoFilter = 'completed' | 'active' | 'all';
interface TodoState {
    todos: Todo[];
    filter: todoFilter
}
const initialState:TodoState = {
    todos: loadFromLocalStorage().todo.todos,
    filter: 'all'
}
 const todoSlice = createSlice( {
    name: 'todo',
    initialState:  initialState,
    reducers: {
        addTodoAction(state,action:PayloadAction<Todo>) {
            state.todos = [action.payload,...state.todos];
        },
        changeStatusAction(state,action:PayloadAction<ChangeStatus>) {
            state.todos = state.todos.map( el => {
                if(el.id === action.payload.id) el.completed = action.payload.completed;
                return el;
            });
        },
        clearCompletedAction(state) {
            state.todos = state.todos.filter(el => !el.completed);

        },
        setFilter(state,action: PayloadAction<todoFilter>) {
            state.filter = action.payload;
        }
    }
})
export default todoSlice.reducer;
export const {addTodoAction,changeStatusAction, clearCompletedAction,setFilter} = todoSlice.actions;
export const selectTodos = (state:RootState) => state.todo.todos;
export const selectFilter = (state:RootState) => state.todo.filter;
export const selectActiveTodos = (state:RootState) => state.todo.todos.filter(el => !el.completed).length;