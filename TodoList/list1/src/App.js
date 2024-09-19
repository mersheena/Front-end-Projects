import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const addTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, { text: currentTask, completed: false }]);
      setCurrentTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    
    <div className="App">
      <h3>Mersheena Francis</h3>
      <h2>To-Do-List...</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter the todo......"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
        /><br/>
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              <span className="checkmark"></span>
            </label>
            <span
              onClick={() => toggleTaskCompletion(index)}
              className={task.completed ? 'completed-text' : ''}
            >
              {task.text}
            </span>
            {!task.completed && (
              <FontAwesomeIcon
                icon={faTrash}
                className="icon trash-icon"
                onClick={() => deleteTask(index)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;