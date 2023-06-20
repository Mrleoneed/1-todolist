import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    const task1: TaskType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    const task2: TaskType[] = [
        {id: 1, title: 'Lager', isDone: false},
        {id: 2, title: 'IPA', isDone: true},
        {id: 3, title: 'Stout', isDone: false},
    ]

    return (
        <div className={'App'}>
            <Todolist title={"What to learn 1"} tasks={task1}/>
            <Todolist title={"Beer"} tasks={task2}/>

        </div>
    )
        ;
}


export default App;



