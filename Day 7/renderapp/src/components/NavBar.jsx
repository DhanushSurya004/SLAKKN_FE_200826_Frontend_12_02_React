import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="site-header">
        <Link className="brand " to="/" >Render</Link>
        <div className="navbar">
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar