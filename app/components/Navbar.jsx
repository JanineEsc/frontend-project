import { SlidersHorizontal, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-screen flex items-center justify-center">
      <div className="relative flex items-center border border-green-800 rounded-full p-2 w-2/5">
        <input 
          type="text"
          placeholder="Search..."
          className="pl-2 pr-10 p-2 rounded-full border-none outline-none w-full"
        />
        <Search className="absolute right-6 text-green-800 w-5 h-7 " />
      </div>
      <SlidersHorizontal className="ml-3 text-green-800 w-5 h-5" />
    </nav>
  )
}

export default Navbar;