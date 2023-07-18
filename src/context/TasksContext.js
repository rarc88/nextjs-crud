'use client';
import {createContext, useContext} from 'react';
import {useLocalStorage} from '@/hooks/useLocalStorage';

const tasksContext = createContext();
const {Provider} = tasksContext;

const defaultData = [
  {id: crypto.randomUUID(), title: 'my first task', description: 'some task'},
  {id: crypto.randomUUID(), title: 'my second task', description: 'some task'},
  {id: crypto.randomUUID(), title: 'my third task', description: 'some task'},
];

export const useTasks = () => {
  const context = useContext(tasksContext);

  if (!context) {
    throw new Error('useTasks must used within a provider');
  }

  return context;
};

export const TasksProvider = ({children}) => {
  const [tasks, setTasks] = useLocalStorage('tasks', defaultData);

  const getTask = (id) => {
    return tasks.find((task) => task.id === id);
  };

  const createTask = (task) => {
    setTasks([...tasks, {id: crypto.randomUUID(), ...task}]);
  };

  const updateTask = (task) => {
    const newTasks = tasks.map((element) => {
      if(element.id === task.id) {
        return task;
      }

      return element;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <Provider
      value={{
        tasks,
        getTask,
        createTask,
        updateTask,
        deleteTask
      }}
    >
      {children}
    </Provider>
  );
};
