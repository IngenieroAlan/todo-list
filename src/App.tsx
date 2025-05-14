
import { useState } from 'react'
import './App.css'
import { TaskItem } from './components/TaskItem';
import useTask from './hooks/useTask';



function App() {
  const [newTask, setNewTask] = useState<string>('');
  const { tasks, addTask, setTaskDone } = useTask();

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
            <button type="button" onClick={() => addTask(newTask, setNewTask)} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Agregar</button>
          </div>
          <div className="mt-4">
            <ul className="max-h-96 overflow-y-auto">
              {
                tasks?.length === 0
                  ? <li className="text-center text-gray-500">No hay tareas agregadas</li>
                  : tasks?.map((task, index) => (
                    <TaskItem index={index} task={task} setTaskDone={setTaskDone} />
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
