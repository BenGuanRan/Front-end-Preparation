import React, { FC } from 'react'
import { TypeTodoList } from '../typings'
import Item from './item'

type ListProps = {
    todoList: TypeTodoList,
    completeProject: (id: number) => void
}

const List: FC<ListProps> = ({
    todoList,
    completeProject
}) => {
    return (
        <div className='todo-list'>
            {
                todoList.map(todo => <Item completeProject={completeProject} key={todo.id} todoList={todoList} todo={todo}></Item>)
            }
        </div>
    )
}
export default List