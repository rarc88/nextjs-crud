'use client'
import {createContext, useContext} from 'react';

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
  const tasks = ['task 1', 'task 2', 'task 3'];

  return <Provider value={{tasks}}>
    {children}
  </Provider>
}