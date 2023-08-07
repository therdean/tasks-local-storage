import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TasksList from './components/TasksList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const taskInput = useRef(null)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (storedTasks.length > 0)
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newTaskItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskItem]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="app">

      <div className="add-task-container">
        <div className="add-task">
          <input
            ref={taskInput}
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleInputKeyPress}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>

      <div className='tasks-list-container'>
        <div className="tasks-list">
          <p>{tasks.length ? 'Tasks' : 'No tasks'}</p>
          <TasksList
            tasks={tasks}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
          />
        </div>
      </div>

    </div>
  );
};

export default App;
