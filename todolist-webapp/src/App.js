import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { name: task, date: dueDate }]);
      setTask('');
      setDueDate('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard">
      {/* Left Panel - Due Date List */}
      <div className="sidebar">
        <h3>Due Dates</h3>
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>{t.date ? `${t.name} - ${t.date}` : `${t.name} - No date`}</li>
          ))}
        </ul>
      </div>

      {/* Right Panel - To-Do + Calendar */}
      <div className="main-panel">
        <div className="todo-container">
          <h2>To-Do List</h2>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={addTask}>Add</button>

          <ul>
            {tasks.map((t, i) => (
              <li key={i}>
                <span>{t.name}</span>
                <button onClick={() => removeTask(i)}>X</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Basic calendar placeholder */}
        <div className="calendar-box">
          <h3>📅 Calendar (Static)</h3>
          <p>This can be replaced with a real calendar later!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
