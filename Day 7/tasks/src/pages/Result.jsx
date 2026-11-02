import { useState } from 'react'

const Result = () => {
  const [marks, setMarks] = useState(35)

  return (
    <section className="mx-auto mt-10 max-w-xl rounded-xl bg-white p-8 text-center shadow">
      <h1 className="mb-6 text-2xl font-bold">Pass / Fail Result</h1>
      <p className="mb-3 text-lg">Marks: {marks}</p>
      <p className="mb-6 text-xl font-semibold">{marks >= 40 ? 'Pass' : 'Fail'}</p>
      <button className="rounded bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700" onClick={() => setMarks(marks + 1)}>Increase Marks</button>
    </section>
  )
}

export default Result
