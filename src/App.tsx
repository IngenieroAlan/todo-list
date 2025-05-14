
import { useState } from 'react'
import './App.css'

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>();
  const [newTask, setNewTask] = useState<string>('');
  const addTask = (description: string) => {
    if (!description) return;
    setNewTask('');
    if (!tasks) return setTasks([{ id: 1, description, completed: false }]);
    setTasks([{ id: tasks?.length + 1, description, completed: false }, ...tasks]);
  };
  const setTaskDone = (id: number) => {
    if (!tasks) return;
    const index = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  return (
    <>
      <header className='w-full flex justify-center items-center'>
        <span className='text-center text-3xl font-semibold dark:text-white text-shadow-2xl text-shadow-gray-400'>To do list</span>
      </header>
      <main className='w-full mt-12'>
        <div className="max-w-md mx-auto">
          <label htmlFor="title" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <input type="text" id="title" value={newTask} onChange={(e) => setNewTask(e.target.value)} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese una tarea..." required />
            <button type="button" onClick={() => addTask(newTask)} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Agregar</button>
          </div>
          <div className="mt-4">
            <ul className="max-h-96 overflow-y-auto">
              {tasks?.length === 0
                ? <li className="text-center text-gray-500">No hay tareas agregadas</li>
                : tasks?.map((task, index) => (
                  <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-lg mb-2">
                    <span className={`text-sm ${task.completed ? 'line-through' : ''}`}>{task.description}</span>
                    <button
                      onClick={() => setTaskDone(task.id)}
                      className="text-blue-500 hover:text-blue-700">
                      {task.completed ? 'Desmarcar' : 'Marcar'}
                    </button>
                  </li>
                ))
              }

            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
