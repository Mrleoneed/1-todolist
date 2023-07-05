import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

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

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyUp={onKeyPressHandler}

            />
            <Button name={'+'} callBack={() => addTask()}/>
        </div>
        <ul>
            {
                props.tasks.map((t) => {
                    const removeTaskHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input
                                type="checkbox"
                                checked={t.isDone}/>
                            <Button name={'x'} callBack={() => removeTaskHandler()}/>
                            <span>{t.title}</span>
                        </li>)
                })}
        </ul>
        <div>
            <Button name={'All'} callBack={() => changeFilterHandler('all')}/>
            <Button name={'Active'} callBack={() => changeFilterHandler('active')}/>
            <Button name={'Completed'} callBack={() => changeFilterHandler('completed')}/>
        </div>
    </div>
}
