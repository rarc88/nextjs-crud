'use client'
import {createContext, useContext, useState} from 'react';

const tasksContext = createContext();

const {Provider} = tasksContext;

export const useTasks = () => {
  const context = useContext(tasksContext);

  if (!context) {
    throw new Error('useTasks must used within a provider');
  }

  return context;
}

export const TasksProvider = ({children}) => {
  const [tasks, setTask] = useState([
    {id: 1, title: 'my first task', description: 'some task'},
    {id: 2, title: 'my second task', description: 'some task'},
    {id: 3, title: 'my third task', description: 'some task'},
  ]);

  const createTask = (title, description) => {
    setTask([...tasks, {id: tasks.length + 1, title, description}]);
  }

  return <Provider value={{tasks, createTask}}>
    {children}
  </Provider>
}