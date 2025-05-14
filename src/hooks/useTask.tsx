import { useState } from "react";
import type { Task } from "../interfaces/myTask";

const useTask = () => {
    const [tasks, setTasks] = useState<Task[]>();
    const setTaskDone = (id: number) => {
        if (!tasks) return;
        const index = tasks.findIndex((task) => task.id === id);
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }
    const addTask = (description: string, setNewTask:(value:string)=>void ) => {
        if (!description) return;
        setNewTask('');
        if (!tasks) return setTasks([{ id: 1, description, completed: false }]);
        setTasks([...tasks,{ id: tasks?.length + 1, description, completed: false }]);
    };
    return {
        tasks,
        addTask,
        setTaskDone,
    }
}

export default useTask;