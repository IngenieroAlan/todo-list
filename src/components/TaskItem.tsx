import type { Task } from "../interfaces/myTask";

interface Props {
    task: Task;
    index: number;
    setTaskDone: (id: number) => void;
}

export const TaskItem = ({ task, index, setTaskDone }: Props) => {
    return (
        <li key={index} className="flex items-center justify-between w-full max-w-md p-2 my-3 bg-gray-100 border border-black rounded-lg mb-2 animate-jump animate-once animate-duration-[750ms] animate-ease-in-out animate-fill-both">
            <span className={`text-sm ${task.completed ? 'line-through' : ''}`}>{task.description}</span>
            <button
                onClick={() => setTaskDone(task.id)}
                className="text-blue-500 hover:text-blue-700">
                {task.completed ? 'Desmarcar' : 'Marcar'}
            </button>
        </li>
    )
}
