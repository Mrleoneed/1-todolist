import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}


export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }


    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                        addTask()
                    }
                }}

            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map((t) => {
                    const removeTaskHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <button onClick={removeTaskHandler}>x</button>
                            <span>{t.title}</span>
                        </li>)
                })}
        </ul>
        <div>
            <button onClick={() => changeFilterHandler('all')}>All</button>
            <button onClick={() => changeFilterHandler('active')}>Active</button>
            <button onClick={() => changeFilterHandler('completed')}>Completed</button>
        </div>
    </div>
}
