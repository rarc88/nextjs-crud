'use client';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {useTasks} from '@/context/TasksContext';

export default function Navbar() {
  const router = useRouter();
  const {tasks} = useTasks();

  return (
    <header>
      <nav className='flex items-center justify-between bg-gray-800 px-28 py-3'>
        <Link href="/">
          <h1 className='font-bold text-3xl text-white'>
            Idulogs
          </h1>
        </Link>
      </nav>
    </header>
  );
}
