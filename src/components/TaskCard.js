import {useRouter} from 'next/navigation';
import {useTasks} from '@/context/TasksContext';

export default function Page({task}) {
  const router = useRouter();
  const {deleteTask} = useTasks();

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteTask(task.id);
  }

  return (
    <div
      style={{background: '#202020', color: 'white'}}
      onClick={() => {router.push(`/edit/${task.id}`)}}
    >
      <h1>{task.title}</h1>
      <button onClick={handleDelete}>Delete</button>
      <p>{task.description}</p>
    </div>
  )
}

;
