'use client'
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation'
import {useForm} from 'react-hook-form';
import {useTasks} from '@/context/TasksContext';

export default function Page({task}) {
  const router = useRouter();
  const {setValue, register, handleSubmit, formState: {errors}} = useForm();

  const {createTask, updateTask} = useTasks();
  const [newTask, setNewTask] = useState();

  useEffect(() => {
    setValue('title', task?.title);
    setValue('description', task?.description);
  }, [task]);

  const onSubmit = handleSubmit((data) => {
    if(task) {
      updateTask({...task, ...data});
    } else {
      createTask(data);
    }
    router.push('/');
  });

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='Write a title'
        {...register('title', {required: true})}
      />
      {errors.title && (
        <span>This field is required</span>
      )}

      <textarea
        placeholder='Write a description'
        {...register('description', {required: true})}
      />
      {errors.title && (
        <span>This field is required</span>
      )}

      <button>Save</button>
    </form>
  )
}
