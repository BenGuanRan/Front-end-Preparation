import React, { FC } from 'react'
import { reducer } from '../reducer'
import { TypeTodo } from '../typings'

type ItemProps = {
    todo: TypeTodo,
    todoList: TypeTodo[],
    completeProject: (id: number) => void
}
const Item: FC<ItemProps> = ({
    todo,
    todoList,
    completeProject
}) => {
    return (
        <div
            onClick={() => completeProject(todo.id)}
            style={
                {
                    cursor: 'pointer',
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }
            }
        >{todo.content}</div >

    )
}
export default Item 