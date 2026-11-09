const Navbar = () => {
  return (
    <>
    <div className="fixed left-0 top-0 z-50 flex h-20 w-full justify-between bg-amber-400 p-5" >
        <div className="bg-red-700 p-2 rounded-2xl hover:scale-125 hover:bg-orange-400">
            DIWALI 2026
        </div>
        <div className="flex gap-20 p-2">
            <a className="hover:text-red-800 hover:scale-150" href="#pooja">POOJA</a>
            <a className="hover:text-red-800 hover:scale-150" href="#clean">HOUSE CLEANING</a>
            <a className="hover:text-red-800 hover:scale-150" href="#movie">FAMILY TIME</a>
        </div>
    </div>
    </>
  )
}

export default Navbar
