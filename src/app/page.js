'use client'
import TaskCard from '@/components/TaskCard';
import {useTasks} from '@/context/TasksContext';

export default () => {
  const {tasks} = useTasks();

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={`task-card${task.id}`} task={task} />
      ))}
    </div>
  )
}
