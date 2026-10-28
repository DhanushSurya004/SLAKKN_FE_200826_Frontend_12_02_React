import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="bg-blue-500 flex justify-between p-3" >
            <div className="bg-amber-300 rounded-3xl p-3 w-20 text-center font-bold ">Render</div>
        <div className="p-3 flex justify-between w-150">
            <Link to ="/"  className="text-white font-bold hover:text-amber-300">Home</Link>
            <Link to ="/login"  className="text-white font-bold hover:text-amber-300">Login</Link>
            <Link to ="/show"  className="text-white font-bold hover:text-amber-300">ShowHide</Link>
            <Link to ="/even"  className="text-white font-bold hover:text-amber-300">EvenOdd</Link>
            <Link to ="/result"  className="text-white font-bold hover:text-amber-300">Result</Link>
            <Link to ="/traffic"  className="text-white font-bold hover:text-amber-300">Traffic</Link>
        </div>
    </div>
    </>
    
  )
}

export default Navbar