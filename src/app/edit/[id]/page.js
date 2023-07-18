'use client';
import {useState, useEffect} from 'react';
import {useTasks} from '@/context/TasksContext';
import NewTaskPage from '../../new/page';

export default function Page({params}) {
  const {tasks, getTask} = useTasks();
  const [task, setTask] = useState();

  useEffect(() => {
    const taskFound = getTask(params.id);
    setTask(taskFound);
  }, [tasks]);

  return (
    <NewTaskPage task={task} />
  );
}
