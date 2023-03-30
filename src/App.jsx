import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Tasks from "./main/components/tasks/Tasks";
import TaskAdd from "./main/components/tasks/task-add/TaskAdd";
import TaskDetails from "./main/components/tasks/task-details/TaskDetails";
import Header from "./main/components/headers/Header";

import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Estudar Programação', completed: false},
    {id: 2, title: 'Ler Livros', completed: true},
  ]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');      
      setTasks(data);
    }

    fetchTask();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks, 
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false
      }
    ];

    setTasks(newTask);
  }

  const handleTaskCompleted = (taskId) => {
    const newTask = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed}
      }
      return task;
    });

    setTasks(newTask);
  };

  const handleTaskRemover = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask)
  };

  return (    
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route 
              path="/" 
              exact 
              element={(
                  <div>
                    <TaskAdd handleTaskAddition={handleTaskAddition}/>
                    <Tasks  tasks={tasks}
                        handleTaskCompleted={handleTaskCompleted}
                        handleTaskRemover={handleTaskRemover}/>
                  </div>
              )}
          />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>                          
      </div>
    </Router>
  );
}

export default App;
