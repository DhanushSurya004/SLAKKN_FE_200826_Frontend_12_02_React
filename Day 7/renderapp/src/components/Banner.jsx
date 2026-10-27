import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section className="banner">
        <h2>Choose a rendering type</h2>
        <div className="banner-links">
          <Link to="/number-rendering">Number rendering</Link>
          <Link to="/string-rendering">String rendering</Link>
          <Link to="/boolean-rendering">Boolean rendering</Link>
          <Link to="/false-rendering">Null rendering</Link>
        </div>
      </section>
    </>
  )
}

export default Banner