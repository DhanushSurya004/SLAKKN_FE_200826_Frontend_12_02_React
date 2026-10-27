import { Link } from 'react-router-dom'

const NumberRendering = () => {
  const number = 4

  return (
    <>
      <section className="simple-page">
        <h1>Number rendering</h1>
        <p>The number is {number}. Here it appears again: {number}. And one more time: {number}.</p>
        <Link className="back-button" to="/">Back</Link>
      </section>
    </>
  )
}

export default NumberRendering