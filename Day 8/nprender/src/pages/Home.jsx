import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="rounded-lg bg-white p-5 shadow-sm min-[521px]:p-7">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Task 1', 'Programming languages', '/task-1'],
            ['Task 2', 'Student details', '/task-2'],
            ['Task 3', 'Employee table', '/task-3'],
            ['Task 4', 'Student props', '/task-4'],
            ['Task 5', 'Product cards', '/task-5'],
          ].map(([label, title, path]) => (
            <Link key={path} to={path} className="rounded-lg border border-[#e2e8f0] p-4 text-[#172033] no-underline transition hover:border-[#4f46e5] hover:bg-[#f8f8ff]">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#4f46e5]">{label}</span>
              <span className="mt-1 block font-semibold">{title}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
