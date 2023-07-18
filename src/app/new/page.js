'use client'
import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation'
import {useTasks} from '@/context/TasksContext';

export default function Page({task}) {
  const router = useRouter();
  const {createTask, updateTask} = useTasks();
  const [newTask, setNewTask] = useState();

  useEffect(() => {
    setNewTask(task);
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(task) {
      updateTask(newTask);
    } else {
      createTask(newTask);
    }
    router.push('/');
  }

  const handleChange = (event) => {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Write a title'
        value={newTask?.title}
        onChange={handleChange}
      />

      <textarea
        name='description'
        placeholder='Write a description'
        value={newTask?.description}
        onChange={handleChange}
      />

      <button>Save</button>
    </form>
  )
}
