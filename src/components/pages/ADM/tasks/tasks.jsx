import './tasks.css'

import { MyTasks } from './MyTasks/MyTasks'
import { AddTask } from './AddTask/AddTask'

export const ADMTasks = () => {

    let tasks = [
        {id: 1, name: "Матрёшка", count: "50"},
        {id: 2, name: "Балалайка", count: "30"},
        {id: 3, name: "Неволяшка", count: "20"},
    ];


    return (
        <>
            <div id="central-container">
                <AddTask />
                <MyTasks data = {tasks} />
            </div>
        </>
    )
}