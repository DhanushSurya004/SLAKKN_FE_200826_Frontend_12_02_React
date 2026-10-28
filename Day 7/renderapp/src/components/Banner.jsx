import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section className="mt-6 rounded-md bg-[#bfdbfe] p-[18px]">
        <h2 className="mb-3 text-lg">Choose a rendering type</h2>
        <div className="flex flex-col flex-wrap items-start gap-[10px] min-[521px]:flex-row">
          <Link className="inline-block rounded bg-[#4f46e5] px-3 py-2 text-white no-underline hover:bg-[#3730a3]" to="/number-rendering">Number rendering</Link>
          <Link className="inline-block rounded bg-[#4f46e5] px-3 py-2 text-white no-underline hover:bg-[#3730a3]" to="/string-rendering">String rendering</Link>
          <Link className="inline-block rounded bg-[#4f46e5] px-3 py-2 text-white no-underline hover:bg-[#3730a3]" to="/boolean-rendering">Boolean rendering</Link>
          <Link className="inline-block rounded bg-[#4f46e5] px-3 py-2 text-white no-underline hover:bg-[#3730a3]" to="/false-rendering">Null rendering</Link>
        </div>
      </section>
    </>
  )
}

export default Banner
