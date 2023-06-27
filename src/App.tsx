import React, {useState} from 'react';
import './App.css';
import {FilterType, Todolist} from './Todolist';

function App() {
    let [tasks, setTasks] = useState([
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false},
            {id: 4, title: "Redux", isDone: false}
        ]
    )

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }


    // const [valueFilter, setValueFilter] = useState<FilterType>('All')
    // const taskFilter = (value: FilterType) => {
    //     setValueFilter(value)
    // }
    // if (valueFilter === 'Active') {
    //     tasks = tasks.filter(el => !el.isDone)
    // }
    // if (valueFilter === 'Completed') {
    //     tasks = tasks.filter(el => el.isDone)
    // }
    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
                // taskFilter={taskFilter}
            />
        </div>
    );
}

export default App;
