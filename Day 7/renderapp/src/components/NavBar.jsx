import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="flex min-h-16 items-center justify-between bg-[#4f46e5] px-4 text-white min-[521px]:px-[7%]">
        <Link className="rounded-[20px] bg-[#facc15] px-[18px] py-2 text-xl font-bold text-[#111827] no-underline" to="/">Render</Link>
        <div>
          <Link className="text-white no-underline hover:underline" to="/">Home</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar
