import type { Task } from "../interfaces/myTask";

interface Props {
    task: Task;
    index: number;
    setTaskDone: (id: number) => void;
}

export const TaskItem = ({ task, index, setTaskDone }: Props) => {
    return (
        <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-lg mb-2">
            <span className={`text-sm ${task.completed ? 'line-through' : ''}`}>{task.description}</span>
            <button
                onClick={() => setTaskDone(task.id)}
                className="text-blue-500 hover:text-blue-700">
                {task.completed ? 'Desmarcar' : 'Marcar'}
            </button>
        </li>
    )
}
