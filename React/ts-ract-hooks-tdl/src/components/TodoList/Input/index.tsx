import React, { useState, FC, ReactElement } from 'react'
import { TypeTodo, TypeTodoList } from '../typings'

type InputProps = {
    addTodo: (todo: TypeTodo) => void,
    todoList: TypeTodoList
}

const Input: FC<InputProps> = ({
    addTodo,
    todoList
}): ReactElement => {
    const [project, setProject] = useState("")
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject(e.target.value)
    }
    const submit = () => {
        if (project.length) {
            if (todoList.some(i => i.content === project))
                alert('该事件已存在！！！')
            else addTodo({
                id: (new Date()).getTime(),
                content: project,
                completed: false
            })
            return setProject("")
        }

    }
    return (
        <div className='todo-input'>
            <input type="text" value={project} onChange={handleInputChange} placeholder='请输入代办项目' />
            <button onClick={submit}>提交</button>
        </div>
    )
}
export default Input