import React, { useCallback, useReducer, useEffect } from 'react'
import Input from './Input'
import List from './List'
import { TypeTodo } from './typings'
import { reducer } from './reducer'
import { stringify } from 'querystring'

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, { todoList: JSON.parse(localStorage.getItem('todoList') || '[]') })
    const addTodo = useCallback((todo: TypeTodo) => {
        dispatch({ type: 'ADD_TODO', value: todo })
    }, [])
    const completeProject = useCallback((id: number) => {
        dispatch({ type: 'COMPLETE_TODO', value: id })
    }, [])


    useEffect(() => {
        const tlist = JSON.parse(localStorage.getItem('todoList') || '[]')
        dispatch({ type: 'INIT_TODOLIST', value: tlist })
    }, [])
    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state.todoList))
    }, [state.todoList])
    return (
        <div>
            <Input todoList={state.todoList} addTodo={addTodo}></Input>
            <List completeProject={completeProject} todoList={state.todoList}></List>
        </div>
    )
}

export default TodoList