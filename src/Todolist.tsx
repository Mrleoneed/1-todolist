import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./Todolist.module.css"
import {FilterValuesType} from './App';
import Checkbox from "./components/Checkbox";

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
    changeIsDone: (id: string, newIsDone: boolean) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<null | string>(null)
    const [buttonName, setButtonName] = useState<FilterValuesType>('all')

    const addTask = () => {
        if (title.trim()) {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError('Title is required')
        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const tsarFoo = (value: FilterValuesType) => {
        props.changeFilter(value)
        setButtonName(value)
    }
    const posrednikFoo = (tId:string,newIsDone:boolean) => {
        props.changeIsDone(tId,newIsDone)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                className={error ? s.error : ''}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={s.errorMessage}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => {
                        props.removeTask(t.id)
                    }


                    return <li key={t.id} className={t.isDone ? s.isDone : ''}>
                        {/*<input*/}
                        {/*    type="checkbox"*/}
                        {/*    checked={t.isDone}*/}
                        {/*    onChange={onChangeIsDoneHandler}/>*/}
                        <Checkbox isDone={t.isDone}
                                  callBack={(newIsDone)=>posrednikFoo(t.id,newIsDone)}

                        />

                        <span>{t.title}</span>

                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button
                className={buttonName === 'all' ? s.activeFilter : ''}
                onClick={() => tsarFoo('all')}>All
            </button>

            <button
                className={buttonName === 'active' ? s.activeFilter : ''}
                onClick={() => tsarFoo('active')}>Active
            </button>

            <button
                className={buttonName === 'completed' ? s.activeFilter : ''}
                onClick={() => tsarFoo('completed')}>Completed
            </button>

        </div>
    </div>
}
