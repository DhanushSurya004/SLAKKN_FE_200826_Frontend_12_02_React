import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-wrap items-center gap-2 border-b bg-white px-6 py-4">
        <span className="mr-4 font-semibold text-gray-800">React Tasks</span>
        <NavLink to="/task1" className={({ isActive }) => `rounded px-3 py-2 text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
          Task 1
        </NavLink>
        <NavLink to="/task2" className={({ isActive }) => `rounded px-3 py-2 text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
          Task 2
        </NavLink>
        <NavLink to="/task3" className={({ isActive }) => `rounded px-3 py-2 text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
          Task 3
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
