import { Link } from 'react-router-dom'

const BooleanRendering = () => {
  const isReady = false

  return (
    <>
      <section className="simple-page">
        <h1>Boolean rendering</h1>
        <p>{isReady ? 'Ready' : 'Not ready'}</p>
        <Link className="back-button" to="/">Back</Link>
      </section>
    </>
  )
}

export default BooleanRendering