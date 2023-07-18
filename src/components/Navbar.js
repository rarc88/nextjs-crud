'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <header>
      <nav>
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <div>
          <button onClick={() =>router.push('/new')}>Add task</button>
        </div>
      </nav>
    </header>
  )
}
