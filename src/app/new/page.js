'use client';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {toast} from 'react-hot-toast';

import {useTasks} from '@/context/TasksContext';

export default function Page({task}) {
  const router = useRouter();
  const {setValue, register, handleSubmit, formState: {errors}} = useForm();

  const {createTask, updateTask} = useTasks();

  useEffect(() => {
    setValue('title', task?.title);
    setValue('description', task?.description);
  }, [task]);

  const onSubmit = handleSubmit((data) => {
    if(task) {
      updateTask({...task, ...data});
      toast.success('task updated successfulley');
    } else {
      createTask(data);
      toast.success('task created successfulley');
    }
    router.push('/');
  });

  return (
    <div className='flex justify-center items-center h-full'>
      <form
        className='bg-gray-700 p-10'
        onSubmit={onSubmit}
      >
        <h2 className='mb-2'>New task</h2>
        <input
          className='bg-gray-800 px-4 py-3 mb-2 block focus:outline-none w-full'
          placeholder='Write a title'
          {...register('title', {required: true})}
        />
        {errors.title && (
          <span className='block text-red-400 mb-2'>This field is required</span>
        )}

        <textarea
          className='bg-gray-800 px-4 py-3 mb-2 block focus:outline-none w-full'
          placeholder='Write a description'
          {...register('description', {required: true})}
        />
        {errors.title && (
          <span className='block text-red-400 mb-2'>This field is required</span>
        )}

        <button className='bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30'>Save</button>
      </form>
    </div>
  );
}
