import { useState } from 'react'

const EvenOdd = () => {
  const [number, setNumber] = useState(0)

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-xl bg-white p-8 text-center shadow">
      <h1 className="mb-6 text-2xl font-bold">Even / Odd Number</h1>
      <p className="mb-3 text-lg">Number: {number}</p>
      <p className="mb-6 text-xl font-semibold">{number % 2 === 0 ? 'Even Number' : 'Odd Number'}</p>
      <button className="rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700" onClick={() => setNumber(number + 1)}>Increment</button>
    </section>
  )
}

export default EvenOdd
