import React, {useState} from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    // taskFilter: (value: FilterType) => void

}

export type FilterType = 'All' | 'Active' | 'Completed'


export function Todolist(props: PropsType) {

    const [valueFilter, setValueFilter] = useState<FilterType>('All')

    let taskFilter = (value: FilterType) => {
        setValueFilter(value)
    }
    const durshlagFoo = () => {
        let durshlag = props.tasks
        //     if (valueFilter === 'Active') {
        //         durshlag = props.tasks.filter(el => !el.isDone)
        //     }
        //     if (valueFilter === 'Completed') {
        //         durshlag = props.tasks.filter(el => el.isDone)
        //     }
        //     return durshlag
        // }
        switch (valueFilter) {
            case "Active": {
                return durshlag = props.tasks.filter(el => !el.isDone)
            }
            case "Completed": {
                return durshlag = props.tasks.filter(el => el.isDone)
            }
            default:
                return durshlag

        }
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {durshlagFoo().map(t => {
                return (
                    <li>
                        <button onClick={() => props.removeTask(t.id)}> &#10060;</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>

                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => taskFilter('All')}>All</button>
            <button onClick={() => taskFilter('Active')}>Active</button>
            <button onClick={() => taskFilter('Completed')}>Completed</button>
        </div>
    </div>
}
