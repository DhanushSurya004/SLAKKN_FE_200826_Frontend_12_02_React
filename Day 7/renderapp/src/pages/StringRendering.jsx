import { Link } from 'react-router-dom'

const StringRendering = () => {
  const word = 'DS'

  return (
    <>
      <section className="simple-page">
        <h1>String rendering</h1>
        <p>The word is {word}. Here it appears again: {word}. And one more time: {word}.</p>
        <Link className="back-button" to="/">Back</Link>
      </section>
    </>
  )
}

export default StringRendering