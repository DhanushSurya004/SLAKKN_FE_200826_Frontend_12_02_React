import { Link } from 'react-router-dom'

const BooleanRendering = () => {
  const isReady = false

  return (
    <>
      <section className="rounded-lg bg-white p-5 min-[521px]:p-7">
        <h1 className="mb-3 mt-0 text-[26px]">Boolean rendering</h1>
        <p className="my-4 leading-[1.6] text-[#374151]">{isReady ? 'Ready' : 'Not ready'}</p>
        <Link className="mt-2 inline-block rounded bg-[#4f46e5] px-3 py-2 text-white no-underline hover:bg-[#3730a3]" to="/">Back</Link>
      </section>
    </>
  )
}

export default BooleanRendering
