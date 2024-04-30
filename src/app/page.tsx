import {Home as HomeIcon, Search, Library} from 'lucide-react'

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72  p-6 bg-zinc-950'>
          <a href="">
            <HomeIcon/>
            Home
          </a>
          <a href="">
            <Search/>
            Search
          </a>
          <a href="">
            <Library/>
            Library
          </a>
        </aside>
        <main className='flex-1 p-6'>
          main
        </main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
        footer
      </footer>
    </div>
  );
}
