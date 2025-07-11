import { useState } from "react";
import type { Task } from "../interfaces/myTask";

const useTask = () => {
    const localStorageTasks = localStorage.getItem('tasks');
    const [tasks, setTasks] = useState<Task[]>(localStorageTasks ? JSON.parse(localStorageTasks) : null);
    const setTaskDone = (id: number) => {
        if (!tasks) return;
        const index = tasks.findIndex((task) => task.id === id);
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
    const addTask = (description: string, setNewTask: (value: string) => void) => {
        if (!description) return;
        setNewTask('');
        if (!tasks) return setTasks([{ id: 1, description, completed: false }]);
        const newTasks = [...tasks, { id: tasks?.length + 1, description, completed: false }];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
    const removeTask = (id: number) => {
        if (!tasks) return;
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
    return {
        tasks,
        addTask,
        setTaskDone,
        removeTask,
    }
}

export default useTask;