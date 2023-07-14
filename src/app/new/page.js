'use client'
import { useState } from 'react';
import {useTasks} from '@/context/TasksContext';

export default () => {
  const {createTask} = useTasks();
  const [task, setTask] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(task.name, task.description);
  }

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Write a title'
        onChange={handleChange}
      />

      <textarea
        name='description'
        placeholder='Write a description'
        onChange={handleChange}
      />

      <button>Save</button>
    </form>
  )
}
