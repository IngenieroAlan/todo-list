import type { Task } from "../interfaces/myTask";

interface Props {
    task: Task;
    index: number;
    setTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export const TaskItem = ({ task, index, setTaskDone, removeTask }: Props) => {
    return (
        <li key={index} className="flex items-center justify-between w-full max-w-md p-2 my-3 bg-gray-100 border border-black rounded-lg mb-2 animate-jump animate-once animate-duration-[750ms] animate-ease-in-out animate-fill-both">
            <span className={`text-sm ${task.completed ? 'line-through' : ''}`}>{task.description}</span>
            <div className="flex gap-2.5">
                <button
                    onClick={() => setTaskDone(task.id)}
                    className="text-blue-500 hover:text-blue-700">
                    {task.completed ? 'Desmarcar' : 'Marcar'}
                </button>
                <button
                    onClick={() =>removeTask(task.id)}
                    className="text-red-500 hover:text-red-700">
                    Eliminar
                </button>
            </div>
        </li>
    )
}
