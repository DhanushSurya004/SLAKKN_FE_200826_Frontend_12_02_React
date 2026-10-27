import { Link } from 'react-router-dom'

const FalseRendering = () => {
  const value = null

  return (
    <>
      <section className="simple-page">
        <h1>Null rendering</h1>
        <p>{value ?? 'No value'}</p>
        <Link className="back-button" to="/">Back</Link>
      </section>
    </>
  )
}

export default FalseRendering